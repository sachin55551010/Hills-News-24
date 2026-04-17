import express from "express";
import { getFacebookPost } from "../controllers/facebook.controller.js";
import { syncFacebookPost } from "../controllers/syncFacebookPosts.controller.js";

export const facebookRoute = express.Router();

facebookRoute.post("/sync-facebook-posts", syncFacebookPost);
facebookRoute.get("/facebook-posts", getFacebookPost);
