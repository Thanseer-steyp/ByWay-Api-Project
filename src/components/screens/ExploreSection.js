import React from 'react'
import "../../App.css"
import Model1 from '../assets/images/model-4.jpg'
import Model2 from '../assets/images/model-6.jpg'
import ArrowRight from '../assets/icons/arrow-right.svg'


function Explore() {
  return (
    <>
      <section id="spotlight">
            <section class="wrapper">
                <section class="spotlight">
                    <section class="top">
                        <div class="left">
                            <img src={Model1} alt='Model-Image' />
                        </div>
                        <div class="right">
                            <h3>Become an Instructor</h3>
                            <p>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                            <a class="button" href="https://www.steyp.com">Start Your Instructor Journey <img src={ArrowRight} alt='Right-Arrow' /></a>
                        </div>
                    </section>
                    <section class="bottom">
                        <div class="left">
                            <h3>Transform your life through education</h3>
                            <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                            <a class="button" href="https://www.steyp.com">Checkout Courses <img src={ArrowRight} alt='Right-Arrow' /></a>
                        </div>
                        <div class="right">
                            <img src={Model2} alt='Model-Image'/>                            
                        </div>
                    </section>
                </section>
            </section>
        </section>
    </>
  )
}

export default Explore
