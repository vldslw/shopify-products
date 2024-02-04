import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Shopify Products</h1>
      </Link>
    </header>
  );
};

export default Header;
