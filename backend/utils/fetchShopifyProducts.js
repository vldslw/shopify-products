const { createAdminApiClient } = require('@shopify/admin-api-client');

const client = createAdminApiClient({
  storeDomain: process.env.SHOPIFY_SHOP_DOMAIN,
  apiVersion: '2024-01',
  accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
});

const fetchShopifyProducts = async () => {
  const graphqlQuery = `{
      products(first: 10) {
        edges {
          node {
            id
            title
            bodyHtml
            images(first: 10) {
                nodes {
                    src
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
      throw new Error(`Error fetching data from Shopify, status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = fetchShopifyProducts;
