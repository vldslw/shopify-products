import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <Link to={`/products/${product._id}`}>
        <img className="product-card__img" src={product.src} alt=""></img>
        <div className="product-card__content">
          <h2 className="product-card__title">{product.title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
