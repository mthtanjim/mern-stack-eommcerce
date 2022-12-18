const Category = require("../models/category")

const category = async(req, res) => {
    try {   
        const {name, slug} = req.body
        const category = await new Category({name,slug}).save()
        res.json({
            category: {
                name: category.name,
                slug: category.slug
            }
        })
    }catch(err) {
        res.send(err)
    }
}

const getCategory = async(req, res) =>{
    try {
        const all = await Category.find({})
        res.json(all)
    } catch(err) {
        console.log(err)
        res.status(400).json(err.message)
    }
}

module.exports = {category, getCategory}