const express = require("express");
const router = express.Router();
const {
  create,
  list,
  update,
  remove,
  read,
  productByCategory,
} = require("../controllers/category");
const { requireSignin, isAdmin } = require("../middlewares/auth");

router.post("/", requireSignin, isAdmin, create);
router.put("/:categoryId", requireSignin, isAdmin, update);
router.delete("/:categoryId", requireSignin, isAdmin, remove);
router.get("/", list);
router.get("/:slug", read);
router.get("/products/:slug", productByCategory);

module.exports = router;

//CRUD
//create read update delete
