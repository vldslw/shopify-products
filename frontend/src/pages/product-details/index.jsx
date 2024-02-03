import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.products);
  const product = products.find((product) => product._id === id);

  console.log(products);
  return error ? (
    <h1>Error occurred while fetching product details</h1>
  ) : isLoading ? (
    <h1>Loading...</h1>
  ) : (
    products &&
    products.length > 0 && (
      <div className="product-details">
        <h2 className="product-details__title">{product.title}</h2>
        <img
          src={product.src}
          alt={product.title}
          className="product-details__img"
        />
        <div
          dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
          className="product-details__body"
        />
      </div>
    )
  );
};

export default ProductDetails;
