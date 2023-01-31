const Product = require("../models/product");
const slugify = require("slugify");
const fs = require("fs");

const CreateProduct = async (req, res) => {
  try {
    const { name, description, price, shipping, category, quantity } =
      req.fields;
    const { photo } = req.files;
    console.log(name, description, price, shipping, category, quantity);

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
      case !category.trim():
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

const UpdateProduct = async (req, res) => {
  try {
    const { name, description, price, shipping, category, quantity } =
      req.fields;
    const { photo } = req.files;
    console.log(name, description, price, shipping, category, quantity);

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
      case !category.trim():
        res.json({ error: "Cateagory is required " });
      case !quantity.trim():
        res.json({ error: "quantity is required " });
      case photo && photo.size > 600000:
        res.json({ error: "Photo size should be less than 600kb" });
    }

    //update product
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        ...req.fields,
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.json(product)
  } catch (err) {
    console.log("create Product---------", err);
    res.status(400).send(err);
  }
};

const list = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (err) {
    console.log("get product error:=> ", err);
    res.send({ err: "product error" });
  }
};

const read = async (req, res) => {
  try {
    const products = await Product.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    res.json(products);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
};
  //photo
const photo = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).select(
      "photo"
    );
    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.send(product.photo.data);
    }
  } catch (err) {
    console.log(err);
    res.status(200).json({ error: err });
  }
};

const remove = async (req, res) => {
  try {
    const remoted = await Product.findByIdAndDelete(
      req.params.productId
    ).select("-photo");
    res.status(200).json(remoted);
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
};

module.exports = { CreateProduct, UpdateProduct, list, read, photo, remove };
