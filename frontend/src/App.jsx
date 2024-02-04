import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/home';
import ProductDetails from './pages/product-details';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/productsSlice';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AllProducts from './pages/products';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
