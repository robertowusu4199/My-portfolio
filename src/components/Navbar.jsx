// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Home", to: "/" },
    { label: "Work", to: "/work" },
    { label: "Accessible_Menu", to: "/blog" },
  ];

  return (
    <nav className="navbar">
      {navItems.map(({ label, to }, key) => (
        <Link to={to} key={key} className="nav-link">
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;