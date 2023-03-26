import React from 'react'

function Footer() {
  return (
    <footer>
        <img src="images/logo2.png" alt="logo" width={80} />
        <section>
            <h3>Doormat Navigations</h3>
            <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Menu</a></li>
            <li><a href=''>Reservations</a></li>
            <li><a href=''>Order Online</a></li>
            <li><a href=''>Login</a></li>
        </ul>
        </section>
        <section>
            <h3>Contact</h3>
            <ul>
                <li>Adress</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </section>
        <section>
            <h3>Social media links</h3>
            <ul>
                <li>Adress</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer