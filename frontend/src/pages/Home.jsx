import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
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
          <article key={product._id} className="product-card">
            <Link to={`/products/${product._id}`}>
              <img className="product-card__img" src={product.src} alt=""></img>
              <div className="product-card__content">
                <h2 className="product-card__title">{product.title}</h2>
              </div>
            </Link>
          </article>
        ))
      )}
    </div>
  );
};

export default Home;
