const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  bodyHtml: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
