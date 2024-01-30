const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

const fetchProductsFromShopify = async () => {
  {
    const graphqlQuery = `{
      products(first: 10) {
        edges {
          node {
            id
            bodyHtml
            images(first: 1) {
              edges {
                node {
                  src
                }
              }
            }
          }
        }
      }
    }`;

    try {
      const response = await shopify.graphql(graphqlQuery);
      console.log(response);
    } catch (error) {
      console.error('Error fetching products from Shopify', error);
    }
  }
};

module.exports = fetchProductsFromShopify;
