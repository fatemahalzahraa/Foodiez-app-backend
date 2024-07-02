const express = require("express");
const { register, login, getAllusers } = require("./controllers");
const passport = require("passport");

const userRouter = express.Router();

userRouter.post("/register", register);

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

userRouter.get("/users", getAllusers);

module.exports = userRouter;
