import { Link } from "react-router-dom";

const Home = ({ products }) => {
  return (
    <div className="products-container">
      {products &&
        products.map((product) => (
          <article key={product._id} className="product-card">
            <Link to={`/products/${product._id}`}>
              <img className="product-card__img" src={product.src} alt=""></img>
              <div className="product-card__content">
                <h2 className="product-card__title">{product.title}</h2>
                {/* <div
                          className="product-card__body"
                          dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
                        ></div> */}
              </div>
            </Link>
          </article>
        ))}
    </div>
  );
};

export default Home;
