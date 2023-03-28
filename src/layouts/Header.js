import React from 'react'
import NavBar from './NavBar'
import logo from "../assets/logo1.png";

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo" width={100} />
        <NavBar/>
    </header>
  )
}

export default Header