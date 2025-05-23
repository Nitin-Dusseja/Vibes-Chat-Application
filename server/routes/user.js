import express from "express";
import {
  acceptFriendRequest,
  getMyFriends,
  getMyNotifications,
  getMyProfile,
  login,
  logout,
  newUser,
  searchUsers,
  sendFriendRequest,
} from "../controllers/user.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  acceptRequestValidator,
  loginValidator,
  registerValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validators.js";

const app = express.Router();

app.post(
  "/signin",
  singleAvatar,
  registerValidator(),
  validateHandler,
  newUser
);
app.post("/login", loginValidator(), validateHandler, login);

app.use(isAuthenticated);

app.get("/profile", getMyProfile);
app.get("/logout", logout);
app.get("/search", searchUsers);

app.put(
  "/sendrequest",
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);

app.put(
  "/acceptrequest",
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);
app.get("/notifications", getMyNotifications);

app.get("/friends", getMyFriends);

export default app;
