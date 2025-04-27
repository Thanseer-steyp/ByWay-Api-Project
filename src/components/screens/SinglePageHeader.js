import React from 'react'
import "../../App.css"
import { Link } from 'react-router-dom'
import Logo from "../assets/icons/logo.svg"
import WishList from "../assets/icons/wishlist.svg"
import Bell from "../assets/icons/bell.svg"
import Cart from "../assets/icons/cart.svg"


function SinglePageHeader() {
  return (
    <>
      <header>
            <section class="wrapper">
                <section class="header">
                <h1>
                    <Link to="/">
                    <img src={Logo} alt='Logo'/>
                    <small>Byway</small>
                    </Link>
                </h1>
                <ul>
                    <li><a href="https://www.steyp.com"><img src={WishList} alt='Wishlist'/></a></li>
                    <li><a href="https://www.steyp.com"><img src={Cart} alt='Cart'/></a></li>
                    <li><a href="https://www.steyp.com"><img src={Bell} alt='Bell'/></a></li>
                    <li className='user'><a href="https://www.steyp.com">J</a></li>
                </ul>
                </section>
            </section>
        </header>
    </>
  )
}

export default SinglePageHeader
