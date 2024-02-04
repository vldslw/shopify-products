require('dotenv').config();
const supertest = require('supertest');
const makeApp = require('../app.js');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Product = require('../models/productModel.js');
const fetchShopifyProducts = require('../utils/fetchShopifyProducts.js');
const updateProducts = require('../utils/updateProducts.js');

let mongoServer;

const connectToDb = async () => {
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri);
};

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const app = makeApp(connectToDb);
  request = supertest(app);
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe('fetchShopifyProducts function', () => {
  it('fetches products array from Shopify', async () => {
    const products = await fetchShopifyProducts();
    expect(Array.isArray(products)).toBe(true);
  });
  it('each product in the array has the expected properties', async () => {
    const products = await fetchShopifyProducts();
    products.forEach((product) => {
      expect(product.node).toHaveProperty('bodyHtml');
      expect(product.node).toHaveProperty('id');
      expect(product.node).toHaveProperty('title');
      expect(product.node.images.nodes[0]).toHaveProperty('src');
    });
  });
});

describe('updateProducts function', () => {
  const mockProducts = [
    {
      node: {
        id: 'gid://shopify/Product/test1',
        title: 'Test Title 1',
        bodyHtml: '<p>Test Body HTML 1</p>',
        images: {
          nodes: [
            {
              src: 'https://test.com/test1.png',
            },
          ],
        },
      },
    },
    {
      node: {
        id: 'gid://shopify/Product/test2',
        title: 'Test Title 2',
        bodyHtml: '<p>Test Body HTML 2</p>',
        images: {
          nodes: [
            {
              src: 'https://test.com/test2.png',
            },
          ],
        },
      },
    },
  ];
  it('updates products in the database, removing previously stored products', async () => {
    await updateProducts(mockProducts);
    const dbProducts = await Product.find();
    expect(dbProducts).toHaveLength(mockProducts.length);
  });
  it('each product in the database has the expected properties', async () => {
    await updateProducts(mockProducts);
    const dbProducts = await Product.find();
    dbProducts.forEach((product, index) => {
      expect(product.shopifyId).toBe(mockProducts[index].node.id);
      expect(product.bodyHtml).toBe(mockProducts[index].node.bodyHtml);
      expect(product.title).toBe(mockProducts[index].node.title);
      expect(product.src).toBe(mockProducts[index].node.images.nodes[0].src);
    });
  });
});

describe('GET /products', () => {
  it('returns status 200', async () => {
    const response = await request.get('/api/products');
    expect(response.status).toBe(200);
  });
  it('returns an array of products in json format', async () => {
    const response = await request.get('/api/products');
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.headers['content-type']).toMatch('application/json');
  });
});
