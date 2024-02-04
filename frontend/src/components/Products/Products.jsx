import { useSelector } from "react-redux";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  return (
    <div className="products-container">
      {error ? (
        <h1>Error occurred while fetching products</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
