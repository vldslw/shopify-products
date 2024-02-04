const express = require('express');
const productRoutes = require('./routes/products');
const { errorHandler } = require('./middlewares/errorHandler');
const cors = require('cors');

module.exports = function (database) {
  const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Origin'],
  };

  const app = express();

  app.use('*', cors(corsOptions));
  app.use(express.json());

  // connect to db
  database().catch((error) => {
    console.error(error);
  });

  app.use('/api/products', productRoutes);

  app.use(errorHandler);

  return app;
};
