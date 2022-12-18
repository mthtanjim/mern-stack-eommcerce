const express = require("express")
const router = express.Router()
const {category, getCategory} = require('../controllers/category')

router.post('/', category)
router.get('/', getCategory)

module.exports = router