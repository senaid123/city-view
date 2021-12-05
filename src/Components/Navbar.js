import { Link } from "react-router-dom";
import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <h2>City View</h2>
      </div>
      <div className="navbarRight">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="aboutUs">
          <button>About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
