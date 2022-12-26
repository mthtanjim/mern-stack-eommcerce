const { default: slugify } = require("slugify");
const Category = require("../models/category");

const create = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name.trim()) {
      return res.json({ error: "name is required" });  
    }
    const existingCategory = await Category.findOne({ name });  
    if (existingCategory) {   
      return res.json({ error: "Already Exists" });   
    }

    const category = await new Category({ name, slug: slugify(name) }).save();
    res.json(category);
  } catch (err) {
    res.send(err);
  }
};

const update = async (req, res) => {
  try {
    const {name} = req.body;
    const {category} = await Category.findByIdAndUpdate(
      req.params.categoryId,
      {
        name,
        slug: slugify(name),
      },
      { new: true }
    );
    res.json({category});
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

const remove = async (req, res) => {
  const removed = await Category.findOneAndDelete(req.params.categoryId);
  res.json({deleted: removed});
  try {
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

const list = async (req, res) => {
  try {
    const all = await Category.find({});
    res.json(all);
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

const read = async (req, res) => {
  try {
    const catagory = await Category.findOne({ slug: req.params.slug });
    return res.json(catagory);
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

module.exports = { list, create, update, remove, read };
