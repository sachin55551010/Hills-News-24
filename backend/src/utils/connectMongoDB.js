import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const res = await mongoose.connect(process.env.LOCAL_MONGODB_URL);
    console.log("MongoDB running on : ", res.connection.host);
  } catch (error) {
    console.log("MongoDB error");
  }
};
