import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <h1 className="footer__title">Shopify Products</h1>
      </Link>
      <p className="footer__copy">Vladislav Pavlov - 2024</p>
    </footer>
  );
};

export default Footer;
