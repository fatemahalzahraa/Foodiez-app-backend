const express = require("express");
const { register } = require("./controllers");

const router = express.Router();

//router.method("url",function)
router.post("/register", register);

module.exports = router;
