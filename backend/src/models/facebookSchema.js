import mongoose from "mongoose";

const facebookSchema = new mongoose.Schema({
  message: String,
  created_time: Date,
  full_picture: String,
  permalink_url: {
    type: String,
    unique: true,
  },
});

export const FacebookPost = mongoose.model("FacebookPost", facebookSchema);
