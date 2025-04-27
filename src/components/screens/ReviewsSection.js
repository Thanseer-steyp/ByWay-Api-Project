import React from 'react'
import "../../App.css"
import StarIcon from "../assets/icons/star.svg"
import EmptyStarIcon from "../assets/icons/EmptyStar.svg"
import ReviewedUser from '../assets/icons/span-6.svg'

function Reviews() {
  return (
    <>
     <section id="learnerReviews">
        <section className="wrapper">
            <section className="learnerReviews">
                <h5>Learner Reviews</h5>
                <div className="reviewSection">
                    <div className="leftSection">
                        <div className="allrating">
                            <img src={StarIcon} alt="Star-Icon" />
                            4.6
                            <small>146,951 reviews</small>
                        </div>
                        <ul className="starLevels">
                            <li>
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                80%
                            </li>
                            <li>
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                10%
                            </li>
                            <li>
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                5%
                            </li>
                            <li>
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                3%
                            </li>
                            <li>
                                <img src={StarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                <img src={EmptyStarIcon} alt="Star-Icon" />
                                2%
                            </li>
                        </ul>
                    </div>
                    <ul className="rightSection">
                        <li>
                            <div className="userSection">
                                <img src={ReviewedUser} alt="User" />
                                <h5>Mark Doe</h5>
                            </div>
                            <div className="contentSection">
                                <div className="topSection">
                                    <img src={StarIcon} alt="Star-Icon" />
                                    5
                                    <small>Reviewed on 22nd March, 2024</small>
                                </div>
                                <p>I was initially apprehensive, having 
                                    no prior design experience. But the 
                                    instructor, John Doe, did an amazing 
                                    job of breaking down complex concepts
                                     into easily digestible modules. The 
                                     video lectures were engaging, and
                                     the real-world examples really helped 
                                     solidify my understanding.</p>
                            </div>
                        </li>
                        <li>
                            <div className="userSection">
                                <img src={ReviewedUser} alt="User" />
                                <h5>Mark Doe</h5>
                            </div>
                            <div className="contentSection">
                                <div className="topSection">
                                    <img src={StarIcon} alt="Star-Icon" />
                                    5
                                    <small>Reviewed on 22nd March, 2024</small>
                                </div>
                                <p>I was initially apprehensive, having 
                                    no prior design experience. But the 
                                    instructor, John Doe, did an amazing 
                                    job of breaking down complex concepts
                                     into easily digestible modules. The 
                                     video lectures were engaging, and
                                     the real-world examples really helped 
                                     solidify my understanding.</p>
                            </div>
                        </li>
                        <li>
                            <div className="userSection">
                                <img src={ReviewedUser} alt="User" />
                                <h5>Mark Doe</h5>
                            </div>
                            <div className="contentSection">
                                <div className="topSection">
                                    <img src={StarIcon} alt="Star-Icon" />
                                    5
                                    <small>Reviewed on 22nd March, 2024</small>
                                </div>
                                <p>I was initially apprehensive, having 
                                    no prior design experience. But the 
                                    instructor, John Doe, did an amazing 
                                    job of breaking down complex concepts
                                     into easily digestible modules. The 
                                     video lectures were engaging, and
                                     the real-world examples really helped 
                                     solidify my understanding.</p>
                            </div>
                        </li>
                        <li>
                            <div className="userSection">
                                <img src={ReviewedUser} alt="User" />
                                <h5>Mark Doe</h5>
                            </div>
                            <div className="contentSection">
                                <div className="topSection">
                                    <img src={StarIcon} alt="Star-Icon" />
                                    5
                                    <small>Reviewed on 22nd March, 2024</small>
                                </div>
                                <p>I was initially apprehensive, having 
                                    no prior design experience. But the 
                                    instructor, John Doe, did an amazing 
                                    job of breaking down complex concepts
                                     into easily digestible modules. The 
                                     video lectures were engaging, and
                                     the real-world examples really helped 
                                     solidify my understanding.</p>
                            </div>
                        </li>
                        <a href="https://www.steyp.com" className="ViewMoreReviews">View more Reviews</a>
                    </ul>
                </div>
            </section>
        </section>
    </section> 
    </>
  )
}

export default Reviews
