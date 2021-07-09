import { Link } from "react-router-dom";

import './header.styles.css';

const Header = () => (
  <div className="header-container">
    <Link className="navbar-links" to="/">Home</Link>
    <Link className="navbar-links" to="/buttons" as="button">Buttons</Link>
    <h1>Random dogs or cats</h1>
  </div>
)

export default Header;