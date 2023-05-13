const { faker } = require("@faker-js/faker");
require("./initDB");
const productModel = require("../models/product.model");

function createRandomProduct() {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  };
}

const products = faker.helpers.multiple(createRandomProduct, {
  count: 10,
});

const createProduct = async () => {
    const res = await productModel.create(products);;
    console.log(res);
    process.exit();
}

createProduct();