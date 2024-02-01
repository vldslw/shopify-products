const { createAdminApiClient } = require('@shopify/admin-api-client');

const client = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_SHOP_DOMAIN,
  apiVersion: '2024-01',
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
      const response = await client.fetch(graphqlQuery);

      if (response.ok) {
        const data = await response.json();
        return data.data.products.edges;
      } else {
        console.error('Error fetching products from Shopify', response);
      }
    } catch (error) {
      console.error('Error fetching products from Shopify', error);
    }
  }
};

module.exports = fetchShopifyProducts;
