import React from 'react'
import "../../App.css"
import StarIcon from "../assets/icons/star.svg"
import InstructorImage from "../assets/images/model-5.jpg"

function Instructors() {
  return (
    <>
      <section id="instructors">
            <section class="wrapper">
                <section class="instructors">
                    <div class="head">
                        <h3>Top Instructors</h3>
                        <a class="button" href="https://www.steyp.com">See All</a>
                    </div>
                    <div class="body">
                        <ul>
                            <li>
                               <img class="bg" src={InstructorImage} alt='Instructor-Image' />
                                <h3>Jesus Jiminez</h3>
                                <small>UI/UX Designer</small> 
                                <hr class="underline" />
                                <div class="rating">
                                    <div class="left"><img src={StarIcon} alt="Star-Icon" /><small>4.9</small></div>
                                    <div class="right">
                                        2400 Students
                                    </div>
                                </div>
                            </li>
                            <li>
                               <img class="bg" src={InstructorImage} alt='Instructor-Image' />
                                <h3>Adrian Luna</h3>
                                <small>UI/UX Designer</small> 
                                <hr class="underline" />
                                <div class="rating">
                                    <div class="left"><img src={StarIcon} alt="Star-Icon" /><small>4.9</small></div>
                                    <div class="right">
                                        2400 Students
                                    </div>
                                </div>
                            </li>
                            <li>
                               <img class="bg" src={InstructorImage} alt='Instructor-Image' />
                                <h3>Noah Sadoui</h3>
                                <small>UI/UX Designer</small> 
                                <hr class="underline" />
                                <div class="rating">
                                    <div class="left"><img src={StarIcon} alt="Star-Icon" /><small>4.9</small></div>
                                    <div class="right">
                                        2400 Students
                                    </div>
                                </div>
                            </li>
                            <li>
                               <img class="bg" src={InstructorImage} alt='Instructor-Image' />
                                <h3>Kwame Peprah</h3>
                                <small>UI/UX Designer</small> 
                                <hr class="underline" />
                                <div class="rating">
                                    <div class="left"><img src={StarIcon} alt="Star-Icon" /><small>4.9</small></div>
                                    <div class="right">
                                        2400 Students
                                    </div>
                                </div>
                            </li>
                            <li>
                               <img class="bg" src={InstructorImage} alt='Instructor-Image' />
                                <h3>Ronald Richards</h3>
                                <small>UI/UX Designer</small> 
                                <hr class="underline" />
                                <div class="rating">
                                    <div class="left"><img src={StarIcon} alt="Star-Icon" /><small>4.9</small></div>
                                    <div class="right">
                                        2400 Students
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Instructors
