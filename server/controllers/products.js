const Product = require("../models/product");

const CreateProduct = async (req, res) => {
  try {
    console.log("body=>", req.body)
    res.json("done")
  } catch (err) {
    console.log("create Product---------", err); 
    res.status(400).send(err); 
  } 
}; 

module.exports = CreateProduct;
