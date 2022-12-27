const express = require("express")
const router = express.Router()
const{list, CreateProduct, read, photo, remove} = require("../controllers/products")
const {isAdmin, requireSignin} = require("../middlewares/auth")
const formidable = require("express-formidable")

router.post("/", formidable(), CreateProduct)
router.get("/", list)
router.get("/:slug", read)
router.delete("/:productId", remove)
router.get("/photo/:productId", photo)


module.exports = router