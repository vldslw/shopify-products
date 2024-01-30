const Product = require('../models/productModel');

// get all products
const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
};

module.exports = { getProducts };
