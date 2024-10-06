const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");
const validateUserData = require("../types/user.types");

async function signUp(req, res) {
  const { username, password } = req.body;
  const isDataValidate = validateUserData.safeParse({ username, password });
  if (!isDataValidate.success) {
    return res.status(400).json({
      message: "Input validation failed:Enter valid username or password",
    });
  }
  const userExist = await User.findOne({ username });
  if (userExist) {
    return res.status(403).json({
      message: "User already exists.please login",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const createUser = await User.create({
    username,
    password: hashedPassword,
  });
  await createUser.save();

  const token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY);
  return res.status(200).json({
    stautus: 200,
    mesage: "User created successfully",
    token: token,
  });
}

async function login(req, res) {
  const { username, password } = req.body;
  const isDataValidate = validateUserData.safeParse({ username, password });
  if (!isDataValidate.success) {
    return res.status(400).json({
      message: "Input validation failed:Enter valid username or password",
    });
  }
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(403).json({
      message: "User doesnot exist.please signup",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "invalid login credentials",
    });
  }
  const token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY);
  return res.status(200).json({
    stautus: 200,
    mesage: "User logged in successfully",
    token: token,
  });
}

module.exports = { signUp, login };
