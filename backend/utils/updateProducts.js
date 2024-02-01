const Product = require('../models/productModel');

const updateProducts = async (products) => {
  try {
    await Product.deleteMany({});
    for (const item of products) {
      const { shopifyId, bodyHtml, src } = {
        shopifyId: item.node.id,
        bodyHtml: item.node.bodyHtml,
        src: item.node.images.nodes[0].src,
      };
      await Product.create({ shopifyId, bodyHtml, src });
    }
    console.log(`Products in the database were updated`);
  } catch (error) {
    console.error('Error updating products in the database', error);
  }
};

module.exports = updateProducts;
