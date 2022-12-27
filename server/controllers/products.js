const Product = require("../models/product");
const slugify = require("slugify");
const fs = require("fs");

const CreateProduct = async (req, res) => {
  try {
    const { name, description, price, shipping, catagory, quantity } =
      req.fields;
    const { photo } = req.files;
    console.log(name, description, price, shipping, catagory, quantity);

    //validation
    switch (true) {
      case !name.trim():
        res.json({ error: "name is required " });
      case !description.trim():
        res.json({ error: "description is required " });
      case !price.trim():
        res.json({ error: "price is required " });
      case !shipping.trim():
        res.json({ error: "shipping is required " });
      case !catagory.trim():
        res.json({ error: "Cateagory is required " });
      case !quantity.trim():
        res.json({ error: "quantity is required " });
      case photo && photo.size > 600000:
        res.json({ error: "Photo size should be less than 600kb" });
    }

    const product = new Product({ ...req.fields, slug: slugify(name) });

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.log("create Product---------", err);
    res.status(400).send(err);
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find({})
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    console.log("get product error:=> ", err);
    res.send({ err: "product error" });
  }
};

const singleProduct = async (req, res) => {
  try{
    const products = await Product.findById(_id).select(-photo) 
    res.json(products) 
  }catch(err) {
    res.json({message: err})
  }
  
}



module.exports = { CreateProduct, getProduct, singleProduct };
