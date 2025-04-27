import React from 'react'
import "../../App.css"
import ArrowDown from "../assets/icons/arrow-down.svg"

function Syllabus() {
  return (
    <>
    <section id="syllabus">
        <section className="wrapper">
            <section className="syllabus">
                <h5>Syllabus</h5>
                <ul>
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Introduction to UX Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Basics of User-Centered Design</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Elements of User Experience</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                    <hr />
                    <li>
                        <img src={ArrowDown} alt="DownArrow" />
                        <h6>Visual Design Principles</h6>
                        <small className="les">5 Lessons</small>
                        <small className="hour">1 hour</small>
                    </li>
                </ul>
                <hr className='last'/>
            </section>
        </section>
    </section>    
    </>
  )
}

export default Syllabus
