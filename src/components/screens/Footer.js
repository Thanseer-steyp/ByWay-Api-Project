import React from 'react'
import "../../App.css"
import Logo from '../assets/icons/logo.svg'
import FacebookLogo from '../assets/images/fb logo.png'
import TwitterLogo from '../assets/images/tx logo.png'
import MicrosoftLogo from '../assets/images/ms logo.png'
import GitLogo from '../assets/images/git logo.png'
import GoogleLogo from '../assets/images/google logo.png'

function Footer() {
  return (
    <>
              <footer>
            <section class="wrapper">
                <section class="footer">
                    <div class="left">
                        <div class="logo">
                            <img src={Logo} alt='Logo-Image' />
                            <small>Byway</small>
                        </div>
                        <p class="one">Empowering learners through accessible and engaging online education.
                        </p>
                        <p class="two">Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
                    </div>
                    <div class="right">
                        <ul>
                            <h4>Get Help</h4>
                            <li><a href="https://www.steyp.com">Contact Us</a></li>
                            <li><a href="https://www.steyp.com">Latest Articles</a></li>
                            <li><a href="https://www.steyp.com">FAQ</a></li>
                        </ul>
                        <ul>
                            <h4>Programs</h4>
                            <li><a href="https://www.steyp.com">Art & Design</a></li>
                            <li><a href="https://www.steyp.com">Business</a></li>
                            <li><a href="https://www.steyp.com">IT & Software</a></li>
                            <li><a href="https://www.steyp.com">Languages</a></li>
                            <li><a href="https://www.steyp.com">Programming</a></li>
                        </ul>
                        <ul class="last">
                            <h4>Contact Us</h4>
                            <li>Address: 123 Main Street, Anytown, CA 12345</li>
                            <li>Tel: +(123) 456-7890</li>
                            <li>Mail: bywayedu@webkul.in</li>
                            <ul>
                                <li><a href="https://www.facebook.com/" target="blank"><img src={FacebookLogo} alt='Facebook-Logo' /></a></li>
                                <li><a href="https://github.com/" target="blank"><img src={GitLogo} alt='Facebook-Logo' /></a></li>
                                <li><a href="https://www.google.co.in/" target="blank"><img src={GoogleLogo} alt='Facebook-Logo' /></a></li>
                                <li><a href="https://x.com/?lang=en" target="blank"><img src={TwitterLogo} alt='Facebook-Logo' /></a></li>
                                <li><a href="https://www.microsoft.com/en-in" target="blank"><img src={MicrosoftLogo} alt='Facebook-Logo' /></a></li>
                            </ul>
                        </ul>
                    </div>
                </section>
            </section>
        </footer>
    </>
  )
}

export default Footer
