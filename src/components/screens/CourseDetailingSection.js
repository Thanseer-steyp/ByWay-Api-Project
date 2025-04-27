import React, { useEffect, useState } from 'react'
import "../../App.css"
import axios from "axios"
// import ShortArrow from "../assets/icons/short-arrow-right-black.svg"
import StarIcon from "../assets/icons/star.svg"
import Language from "../assets/icons/language.svg"
import instructorBg from "../assets/images/img.jpg"
import FacebookLogo from '../assets/images/fb logo.png'
import TwitterLogo from '../assets/images/tx logo.png'
import MicrosoftLogo from '../assets/images/ms logo.png'
import GitLogo from '../assets/images/git logo.png'
import GoogleLogo from '../assets/images/google logo.png'

import { useParams } from 'react-router-dom';


function CourseDetailing() {

    const { id } = useParams();
    const [course, setCourse] = useState(null);
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setCourse(response.data)
            }).catch(error => {
                console.log(error)
            }) 
    });

  return (
    <>
    <section id="courseDetail">
        <section className="wrapper">
            <section className="courseDetail">
            <div className="leftContainer">
                {/* <div className="path">
                    <small>Home</small>
                    <img src={ShortArrow} alt="Arrow" />
                    <small>{course.category}</small>
                    <img src={ShortArrow} alt="Arrow" />
                    <small className='courseTitle'>{course.title}</small>
                </div> */}
                <h2>{course?.title}</h2>
                <p>{course?.description}</p>
                <div className="ratingDetails">
    <b>{course?.rating?.rate}</b>
    <div className="ratingstar">
        {Number.isFinite(course?.rating?.rate) && Array(Math.round(course.rating.rate)).fill().map((_, index) => (
            <img key={index} src={StarIcon} alt="Star-Icon" />
        ))}
    </div>
    <small>( {course?.rating?.count} )</small>
</div>
<div className="instructorDetails">
                    <div className="instructorImage">
                        <img src={course?.image} alt="Product" />
                    </div>
                    <h6>{course?.category}</h6>
                </div>
                <div className="languageDetails">
                    <img src={Language} alt="Lang-Icon" />
                    <small>English, Spanish, Italian, German</small>
                </div>
            </div>
            <div className="rightContainer">
                <div className="instructorBg">
                    <img src={course?.image} alt="Product-Bg" />
                </div>
                <div className="pricingDetails">
                    <b className='offer'>${course?.price}</b>
                    <b className='pricing'>$99.5</b>
                    <b className='off'>50% Off</b>
                </div>
                <a href="https://www.steyp.com" className="addToCartButton">Add to Cart</a>
                <a href="https://www.steyp.com" className="buyNowButton">Buy Now</a>
                <hr />
                <small className="share">Share</small>
                <ul>
                    <li><a href="https://www.facebook.com/" target="blank"><img src={FacebookLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://github.com/" target="blank"><img src={GitLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://www.google.co.in/" target="blank"><img src={GoogleLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://x.com/?lang=en" target="blank"><img src={TwitterLogo} alt='Facebook-Logo' /></a></li>
                    <li><a href="https://www.microsoft.com/en-in" target="blank"><img src={MicrosoftLogo} alt='Facebook-Logo' /></a></li>
                </ul>
            </div>
            </section>
        </section>
    </section> 
    </>
  )
}

export default CourseDetailing
