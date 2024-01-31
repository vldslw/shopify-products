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
      <div className="products">
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <img src={product.src}></img>
              <div dangerouslySetInnerHTML={{ __html: product.bodyHtml }}></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
