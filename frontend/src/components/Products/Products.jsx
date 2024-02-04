import { useSelector } from "react-redux";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  return (
    <div className="products-container">
      {error ? (
        <h2 className="products-container__error">
          Error occurred while fetching products, please try later
        </h2>
      ) : isLoading ? (
        <h2 className="products-container__loading">Loading...</h2>
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
