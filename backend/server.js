require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const fetchShopifyProducts = require('./utils/fetchShopifyProducts');
const updateProducts = require('./utils/updateProducts');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

app.use('/api/products', productRoutes);

app.use(errorHandler);

// connect to db, start the server, fetch products from Shopify and add them to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
      fetchShopifyProducts().then(updateProducts).catch(console.error);
    });
  })
  .catch((error) => {
    console.error(error);
  });
