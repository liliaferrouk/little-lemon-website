import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
      <nav>
      <ul>
        <li>
          <Link to="/" style={{textDecoration: "none"}}>Home</Link>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <Link to="/booking" style={{textDecoration: "none"}}>Reservations</Link>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
      </nav>
  );
}

export default NavBar;
