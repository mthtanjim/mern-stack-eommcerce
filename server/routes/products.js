const express = require("express");
const router = express.Router();
const {
  CreateProduct,
  UpdateProduct,
  list,
  productsCount,
  read,
  photo,
  remove,
  filterProduct,
  listProducts,
} = require("../controllers/products");
const { isAdmin, requireSignin } = require("../middlewares/auth");
const formidable = require("express-formidable");

router.post("/", formidable(), CreateProduct);
router.put("/:productId", formidable(), UpdateProduct);
router.get("/", list);
router.get("/products-count", productsCount);
router.get("/:slug", read);
router.delete("/:productId", remove);
router.get("/photo/:productId", photo);
router.post("/filterd-product", filterProduct);
router.get("/list-products/:page", listProducts);

module.exports = router;
