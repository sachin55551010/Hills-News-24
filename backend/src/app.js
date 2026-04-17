import express from "express";
import dotenv from "dotenv";
import { facebookRoute } from "./routes/facebook.route.js";
import { connectMongoDB } from "./utils/connectMongoDB.js";
import cors from "cors";
import { startServiceCron } from "../services/startFacebookCron.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET"],
    credentials: true,
  }),
);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Server working fine!");
});

startServiceCron();
connectMongoDB();
app.use("/api", facebookRoute);
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
