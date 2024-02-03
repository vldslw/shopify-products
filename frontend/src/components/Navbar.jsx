import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar__title">Shopify Products</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
