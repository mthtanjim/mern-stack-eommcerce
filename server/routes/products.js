const express = require("express")
const router = express.Router()
const CreateProduct = require("../controllers/products")



router.post("/", CreateProduct)

module.exports = router
