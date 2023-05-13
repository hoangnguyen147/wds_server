const express = require("express");
const productCtl = require("./controllers/product.controller")

const router = express.Router();

router.get("/api/v1/products", productCtl.getProducts)

module.exports = router;