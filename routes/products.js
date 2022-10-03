const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const productsController = require("../controllers/products");
const commentsController = require("../controllers/comments");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Product Routes - simplified for now
router.get("/:id", ensureAuth, productsController.getProduct);

router.post(
  "/createProduct",
  upload.single("file"),
  productsController.createProduct
);

router.put("/likeProduct/:id", productsController.likeProduct);

router.delete("/deleteProduct/:id", productsController.deleteProduct);

//Comment Routes
router.post("/createComment/:id", commentsController.createComment);

module.exports = router;

module.exports = router;
