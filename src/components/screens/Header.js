import React from 'react'
import "../../App.css"
import Logo from "../assets/icons/logo.svg"
import Cart from "../assets/icons/cart.svg"

function Header() {
  return (
    <>
      <header>
            <section class="wrapper">
                <section class="header">
                <h1>
                    <a href="https://www.steyp.com">
                      <img src={Logo} alt='Logo'/>
                      <small>Byway</small>
                    </a>
                    
                </h1>
                <ul>
                    <li><a href="https://www.steyp.com"><img src={Cart} alt='Cart'/></a></li>
                    <li><a href="https://www.steyp.com" class="login">Log In</a></li>
                    <li><a href="https://www.steyp.com" class="signup">Sign Up</a></li>
                </ul>
                </section>
            </section>
        </header>

    </>
  )
}

export default Header
