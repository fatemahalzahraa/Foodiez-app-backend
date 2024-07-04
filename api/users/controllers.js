const bcrypt = require("bcrypt");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const Recipe = require("../../models/Recipe");
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
    const user = req.user;
    const token = generateToken(user);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const getAllusers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res
        .status(404)
        .json({ msg: "There is no user with this id, is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};
const UpdateProfile = async (req, res, next) => {
  console.log(req.file);
  const id = req.params.id;
  console.log("testfdsfsdf");
  try {
    console.log("test", req.file);
    if (req.file) {
      req.body.image = `${req.file.path.replace("\\", "/")}`;
    }
    const user = await User.findByIdAndUpdate(id, req.body);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
const getMyProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("recipes");
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateToken,
  register,
  login,
  getAllusers,
  getOneUser,
  UpdateProfile,
  getMyProfile,
};
