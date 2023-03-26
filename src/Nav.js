import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav >
        <ul>
            {/* <Link to="/" style={{textDecoration: "none"}}>
                Home
            </Link> */}
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            {/* <Link to="/" style={{textDecoration: "none"}}>
                Reservations
            </Link> */}
            <li><a href=''>Reservations</a></li>
            <li><a href=''>Order Online</a></li>
            <li><a href=''>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav