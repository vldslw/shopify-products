require('dotenv').config();
const database = require('./database');
const fetchShopifyProducts = require('./utils/fetchShopifyProducts');
const updateProducts = require('./utils/updateProducts');
const makeApp = require('./app');

const app = makeApp(database);

// start the server, fetch products from Shopify and add them to the database
app.listen(process.env.PORT, () => {
  console.log('connected to db & listening on port', process.env.PORT);
  fetchShopifyProducts().then(updateProducts).catch(console.error);
});
