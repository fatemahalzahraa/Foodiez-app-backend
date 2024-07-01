const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TOKEN_EXP,
  });

  return token;
};

const register = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create(req.body);

    const token = generateToken(newUser);

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
<<<<<<< HEAD
    // const user = req.user;
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.findById(req.body);

    const token = generateToken(newUser);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
=======
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = req.user;
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json("Server Error");
>>>>>>> origin/main
  }
};

module.exports = { generateToken, register, login };
