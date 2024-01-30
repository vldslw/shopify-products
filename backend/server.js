require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const fetchProductsFromShopify = require('./utils/shopify');

const app = express();

app.get('/products', (req, res) => {
  res.json({ message: 'GET products' });
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
      fetchProductsFromShopify();
    });
  })
  .catch((err) => {
    console.log(err);
  });
