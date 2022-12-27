const express = require("express")
const router = express.Router()
const{getProduct, CreateProduct} = require("../controllers/products")
const {isAdmin, requireSignin} = require("../middlewares/auth")
const formidable = require("express-formidable")

router.post("/", formidable(), CreateProduct)
router.get("/", getProduct)

module.exports = router
