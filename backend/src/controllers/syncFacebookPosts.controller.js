import { FacebookPost } from "../models/facebookSchema.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const syncFacebookPost = async () => {
  try {
    const PAGE_ID = process.env.PAGE_ID;
    const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

    const response = await axios.get(
      `https://graph.facebook.com/v25.0/${PAGE_ID}/posts`,
      {
        params: {
          fields: "message,created_time,full_picture,permalink_url",
          access_token: PAGE_ACCESS_TOKEN,
        },
      },
    );

    const posts = response?.data?.data || [];

    if (posts.length === 0) {
      throw new Error("No posts found");
    }

    for (const post of posts) {
      await FacebookPost.updateOne(
        { permalink_url: post.permalink_url },
        {
          message: post.message || "",
          created_time: post.created_time,
          full_picture: post.full_picture || "",
          permalink_url: post.permalink_url,
        },
        { upsert: true },
      );
    }

    return { success: true, message: "Facebook Post sync" };
  } catch (error) {
    console.error("Fetch post error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    throw error; // important for cron to catch
  }
};
