import { FacebookPost } from "../models/facebookSchema.js";
import axios from "axios";
import dotenv from "dotenv";
import { createHash } from "node:crypto";
import cloudinary from "../utils/cloudinary.js";

dotenv.config();

/**
 * Upload a Facebook image URL to Cloudinary.
 * Returns the secure_url on success, or null on failure.
 */
const uploadToCloudinary = async (sourcePicture, permalinkUrl) => {
  try {
    const publicId = createHash("sha256")
      .update(permalinkUrl || sourcePicture)
      .digest("hex");

    const uploadedImage = await cloudinary.uploader.upload(sourcePicture, {
      folder: "hills-news/facebook",
      public_id: publicId,
      overwrite: true,
      resource_type: "image",
      fetch_format: "auto",
      quality: "auto",
    });

    return uploadedImage.secure_url;
  } catch (err) {
    console.error("Cloudinary upload failed for:", permalinkUrl, err.message);
    return null; // Don't abort entire sync on single image failure
  }
};

export const syncFacebookPost = async () => {
  const PAGE_ID = process.env.PAGE_ID;
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  if (!PAGE_ID || !PAGE_ACCESS_TOKEN) {
    throw new Error(
      "Missing PAGE_ID or PAGE_ACCESS_TOKEN in environment variables"
    );
  }

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v25.0/${PAGE_ID}/posts`,
      {
        params: {
          fields: "message,created_time,full_picture,permalink_url",
          access_token: PAGE_ACCESS_TOKEN,
        },
      }
    );

    const posts = response?.data?.data || [];

    if (posts.length === 0) {
      console.warn("No posts found from Facebook API.");
      return { success: true, message: "No posts to sync" };
    }

    let synced = 0;
    let failed = 0;

    for (const post of posts) {
      try {
        const existingPost = await FacebookPost.findOne({
          permalink_url: post.permalink_url,
        });

        const sourcePicture = post.full_picture || "";
        let fullPicture = existingPost?.full_picture || "";

        if (sourcePicture) {
          const sourceChanged = existingPost?.source_picture !== sourcePicture;
          const cloudinaryUrlMissing = !fullPicture;

          if (sourceChanged || cloudinaryUrlMissing) {
            // Upload the new/changed image to Cloudinary
            const uploaded = await uploadToCloudinary(
              sourcePicture,
              post.permalink_url
            );

            if (uploaded) {
              fullPicture = uploaded;
            } else if (cloudinaryUrlMissing) {
              // Upload failed and no existing Cloudinary URL — keep empty
              fullPicture = "";
            }
            // If upload failed but we had a valid Cloudinary URL already, keep it
          }
        } else {
          // No image from Facebook
          fullPicture = "";
        }

        await FacebookPost.updateOne(
          { permalink_url: post.permalink_url },
          {
            $set: {
              message: post.message || "",
              created_time: post.created_time,
              full_picture: fullPicture,
              source_picture: sourcePicture,
              permalink_url: post.permalink_url,
            },
          },
          { upsert: true }
        );

        synced++;
      } catch (postError) {
        console.error(
          "Failed to sync post:",
          post.permalink_url,
          postError.message
        );
        failed++;
      }
    }

    console.log(`Facebook sync complete: ${synced} synced, ${failed} failed.`);
    return {
      success: true,
      message: "Facebook Post sync complete",
      synced,
      failed,
    };
  } catch (error) {
    console.error("Fetch post error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    throw error; // important for cron to catch
  }
};
