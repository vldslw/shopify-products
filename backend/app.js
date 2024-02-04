const express = require('express');
const productRoutes = require('./routes/products');
const { errorHandler } = require('./middlewares/errorHandler');

module.exports = function (database) {
  const app = express();

  app.use(express.json());

  // connect to db
  database().catch((error) => {
    console.error(error);
  });

  app.use('/api/products', productRoutes);

  app.use(errorHandler);

  return app;
};
