const express = require("express");
const {
  register,
  login,
  getAllusers,
  getOneUser,
  UpdateProfile,
  getMyProfile,
} = require("./controllers");
const passport = require("passport");
const upload = require("../../middlewares/multer");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

userRouter.get("/users", getAllusers);

userRouter.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  getMyProfile
);
userRouter.get("/:id", getOneUser);
userRouter.post("/:id", upload.single("image"), UpdateProfile);

module.exports = userRouter;
