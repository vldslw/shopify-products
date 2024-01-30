require('dotenv').config();

const express = require('express');

const app = express();

app.get('/api/products', (req, res) => {
  res.json({ message: 'GET products' });
});

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
