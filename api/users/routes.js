const express = require("express");
const { register, login } = require("./controllers");
const passport = require("passport");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

module.exports = userRouter;
