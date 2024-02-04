# Junior Full-stack Developer CPB

### Shopify Products Project

This is an full-stack application that displays products that were fetched from the Shopify GraphQL Admin API and saved to a database using Express and MongoDB. The frontend part is built using React and Redux.

The products are fetched from the Shopify GraphQL Admin API on the server start and saved to a database. The database is previously cleared to avoid duplicates.

The Express app sets an endpoint to fetch the products from the database. The client then fetches the products from the server and displays them in a grid view on the frontend. The interface is adaptive and works both on desktop and mobile devices.

The home page of the app displays all products in a grid view. There is also a separate route to view all products. In the future, it could be possible to add functionality to view products by category, price, etc. For now the user can view all of them at once.

The user can click on a product to view more details about it in a separate page, uncluding the product body HTML that is fetched from the Shopify API.

Redux is used to manage the state of the application. The products are fetched from the server and saved to the Redux store. The store is then used to display the products in the grid view and the product details page.

The product images are displayed using Canvas.

The tests are writter for the key functionality of the server using Jest and Supertest. The fetch products from the Shopify API function and the save products to the database function are tested, as well as the endpoint to fetch the products from the database.

### Installing and running the application

- Go to the directory where you want to clone the repository
- Clone the repository: `git clone https://github.com/vldslw/shopify-products.git`
- Navigate into the directory: `cd shopify-products`

#### Backend part:

- Navigate into the backend directory: `cd backend`
- Install the dependencies: `npm install`
- Set up the `.env` file in the backend directory with the necessary configuration for the application to work. You can use the `.env.example` file as a template: the default confuguration is provided there, including the Shopify shop domain `SHOPIFY_SHOP_DOMAIN` and the access token for the Shopify API `SHOPIFY_ACCESS_TOKEN`. You can use your own MongoDB database URI or use the `MONGO_URI` provided in the example file as well. You will also need to specify the `PORT` that the application will run on.
- Start the application: `npm run dev`

The server will start on the port that you specified in the `.env` file.

#### Frontend part:

- Navigate into the frontend directory: `cd frontend`
- Install the dependencies: `npm install`
- Start the application: `npm run dev`

The client will start on port 5173: `http://localhost:5173/`. This port is configured in cors options in the backend part.

## Running the tests

To run the tests for the backend part, navigate into the backend directory and run `npm run test`.

## Author

- **Vladislav Pavlov** - [vldslw](https://github.com/vldslw)
