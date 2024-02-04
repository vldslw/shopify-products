const Product = require('../models/productModel');

const updateProducts = async (products) => {
  try {
    await Product.deleteMany({});
    for (const item of products) {
      const { shopifyId, bodyHtml, title, src } = {
        shopifyId: item.node.id,
        bodyHtml: item.node.bodyHtml,
        title: item.node.title,
        src: item.node.images.nodes[0].src,
      };
      await Product.create({ shopifyId, bodyHtml, title, src });
    }
    console.log(`Products in the database were updated`);
  } catch (error) {
    throw new Error(`Error updating products in the database: ${error}`);
  }
};

module.exports = updateProducts;
