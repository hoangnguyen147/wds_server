const productModel = require("../models/product.model");

class ProductController {
    getProducts = async (req, res, next) => {
        const products = await productModel.find();

        return res.status(200).json(products);
    }
}

module.exports = new ProductController();
