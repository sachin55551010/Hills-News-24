import { FacebookPost } from "../models/facebookSchema.js";

export const getFacebookPost = async (req, res) => {
  const { skip, limit } = req.query;

  // console.log("skip", skip);
  // console.log("limit", limit);

  const total_posts = await FacebookPost.countDocuments();

  try {
    const posts = await FacebookPost.find()
      .skip(skip)
      .limit(limit)
      .sort({ created_time: -1 });

    res.status(200).json({ data: posts, total_posts, success: true });
  } catch (error) {
    console.log("get post error", error);
  }
};
