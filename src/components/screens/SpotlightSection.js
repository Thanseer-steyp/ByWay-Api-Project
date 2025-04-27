import React from 'react'
import "../../App.css"
import SpotlightImage from "../assets/images/spotlight.png"

function Spotlight() {
  return (
    <>
      <section id="home">
            <section class="wrapper">
                <section class="home">
                    <div class="left">
                        <h1>Unlock Your Potential With Byway</h1>
                        <p>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success.</p>
                        <a class="button" href='https://www.steyp.com'>Start your instructor journey</a>
                    </div>
                    <div class="right">
                        <img src={SpotlightImage} alt='Spotlight-Image'/>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Spotlight
