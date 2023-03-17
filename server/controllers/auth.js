const { post } = require("../routes/auth");
const User = require("../models/user");
const { comparePassword, hashPassword } = require("../helpers/auth");
var jwt = require("jsonwebtoken");

// this to fix  before saving
// add validation
// check if email is taken
// hash password

const register = async (req, res) => {
  try {
    //1. destracture name email pass form req.body
    const { name, email, password } = req.body;
    //2. check all fields require validation
    if (!name.trim()) {
      return res.json({ error: "name is required" });
    }
    if (!email) {
      return res.json({ error: "meail is required" });
    }
    if (!password || password.lenth > 6) {
      return res.json({ error: "password not valied" });
    }
    //3. check if email is taken
    const existsUser = await User.findOne({ email });
    if (existsUser) {
      console.log("esists", existsUser);
      return res.json({ error: "user is taken" });
    }
    //4. hash password
    const hashedPass = await hashPassword(password);
    //5. register the user
    const user = await new User({ name, email, password: hashedPass }).save();
    //6. create sign token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    //1. destracture name email pass form req.body
    const { email, password } = req.body;
    //2. check all fields require validation
    if (!email) {
      return res.json({ error: "meail is required" });
    }
    if (!password || password.lenth > 6) {
      return res.json({ error: "password not valied" });
    }
    //3. check if email is taken
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "user not found.." });
    }
    //4. compare password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({ error: "wrong password" });
    }
    //5. create sign token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log("token: => ", token);
    //send response
    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const users = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
  }
};

const updateProfile = async (req, res) => {
  console.log("req.user", req);
  try {
    const { name, password, address } = req.body;
    const user = await User.findById(req.user._id);

    //check password length
    if (password && password.length < 6) {
      return res.json({
        error: "password is required and should be min 6 characters long",
      });
    }
    // hash the password
    const hashPassword = password ? hashPassword(password) : undefined;

    const updated = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: name || user.name,
        password: password || user.password,
        address: address || user.address,
      },
      { new: true }
    );

    updated.password = undefined;
    res.json(updated);
  } catch (err) {
    console.log("Found Error in update profile", err);
  }
};

const secret = async (req, res, next) => {
  // console.log("curent users:=>", req.decoded)
  res.json({ currentUser: req.user });
};

module.exports = { register, login, users, secret, updateProfile };
