require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const fetchShopifyProducts = require('./utils/fetchShopifyProducts');
const updateProducts = require('./utils/updateProducts');

const app = express();

app.get('/products', (req, res) => {
  res.json({ message: 'GET products' });
});

// connect to db, start the server, fetch products from Shopify and add them to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
      fetchShopifyProducts().then(updateProducts).catch(console.error);
    });
  })
  .catch((err) => {
    console.log(err);
  });
