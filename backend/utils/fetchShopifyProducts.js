const Shopify = require('shopify-api-node');

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_SHOP_NAME,
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

const fetchShopifyProducts = async () => {
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
      return response.products.edges;
    } catch (error) {
      console.error('Error fetching products from Shopify', error);
    }
  }
};

module.exports = fetchShopifyProducts;
