import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductCard.css";
import Canvas from "../../canvas/Canvas";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <Link to={`/products/${product._id}`}>
        <Canvas product={product} className="product-card__img" />
        <div className="product-card__content">
          <h2 className="product-card__title">{product.title}</h2>
        </div>
      </Link>
    </article>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
