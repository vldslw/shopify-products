import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.css";
import Canvas from "../../canvas/Canvas";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, isLoading, error } = useSelector((state) => state.products);
  const product = products.find((product) => product._id === id);

  return (
    <div className="product-details">
      {error ? (
        <h2 className="product-details__error">
          Error occurred while fetching product details, please try later
        </h2>
      ) : isLoading ? (
        <h2 className="product-details__loading">Loading...</h2>
      ) : (
        products &&
        products.length > 0 && (
          <>
            <h2 className="product-details__title">{product.title}</h2>
            <Canvas product={product} className="product-details__img" />
            <div
              dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
              className="product-details__body"
            />
          </>
        )
      )}
    </div>
  );
};

export default ProductDetails;
