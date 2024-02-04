const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    shopifyId: String,
    bodyHtml: String,
    title: String,
    src: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Product', productSchema);
