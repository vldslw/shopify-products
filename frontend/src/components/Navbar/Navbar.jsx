import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/products">
        <li className="navbar__category">All products</li>
      </Link>
    </nav>
  );
};

export default Navbar;
