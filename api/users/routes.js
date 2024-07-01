const express = require("express");
const { register, login } = require("./controllers");
const passport = require("passport");

const router = express.Router();

//router.method("url",function)
router.post("/register", register);
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);

module.exports = router;
