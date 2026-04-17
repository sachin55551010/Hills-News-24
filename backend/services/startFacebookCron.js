import cron from "node-cron";
import { syncFacebookPost } from "../src/controllers/syncFacebookPosts.controller.js";
export const startServiceCron = () => {
  cron.schedule("*/10 * * * *", async () => {
    try {
      console.log("Running facebook cron...");
      await syncFacebookPost();
    } catch (err) {
      console.error("Cron error:", err.message);
    }
  });
};
