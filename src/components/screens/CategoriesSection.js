import React from 'react'
import "../../App.css"
import Astrology from "../assets/icons/astrology.svg"
import Development from "../assets/icons/devlopment.svg"
import Marketing from "../assets/icons/marketing.svg"
import Physics from "../assets/icons/physics.svg"



function Categories() {
  return (
    <>
      <section id="categories">
            <section class="wrapper">
                <section class="categories">
                    <div class="head">
                        <h3>Top Categories</h3>
                        <a class="button" href="https://www.steyp.com">See All</a>
                    </div>
                    <div class="body">
                        <ul>
                            <li>
                               <div class="logo"><img src={Astrology} alt='Astrology-Icon' /></div>
                                <h3>Astrology</h3>
                                <small>11 Courses</small> 
                            </li>
                            <li>
                                <div class="logo"><img src={Development} alt='Development-Icon'/></div>
                                <h3>Development</h3>
                                <small>12 Courses</small>
                            </li>
                            <li>
                                <div class="logo"><img src={Marketing} alt='Marketing-Icon'/></div>
                                <h3>Marketing</h3>
                                <small>12 Courses</small>
                            </li>
                            <li>
                                <div class="logo"><img src={Physics} alt='Physics-Icon' /></div>
                                <h3>Physics</h3>
                                <small>14 Courses</small>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Categories
