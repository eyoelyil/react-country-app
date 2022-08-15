import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="logo">Countries</p>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Countries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
