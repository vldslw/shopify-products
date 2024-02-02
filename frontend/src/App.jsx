import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:4000/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="app">
      <div className="products-container">
        {products &&
          products.map((product) => (
            <article key={product._id} className="product-card">
              <img className="product-card__img" src={product.src} alt=""></img>
              <div className="product-card__content">
                <h2 className="product-card__title">{product.title}</h2>
                {/* <div
                  className="product-card__body"
                  dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
                ></div> */}
              </div>
            </article>
          ))}
      </div>
    </div>
  );
}

export default App;
