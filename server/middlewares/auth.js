const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireSignin = (req, res, next) => {
 
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.decoded = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.decoded)
  if (user.role !== 1) {
    res.status(401).send("Unauthorized..")
  } else {
    next()
  }
}; 


  
module.exports = { requireSignin, isAdmin};


