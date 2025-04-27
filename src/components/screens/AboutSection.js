import React, { useState } from 'react';
import "../../App.css"
import LeftArrow from "../assets/icons/short-arrow-left.svg"
import RightArrow from "../assets/icons/short-arrow-right.svg"
import UserImage from '../assets/icons/span-7.svg'
import QuoteIcon from "../assets/icons/quotes.svg"


const FeedbacksSlider = () => {
  const feedbacks = [
    {
      name: "Jane Doe",
      role: "Manager",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    },
    {
      name: "John Kurishinkal",
      role: "Designer",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    },
    {
      name: "Thomas Muller",
      role: "Developer",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    },
    {
      name: "Otamendi",
      role: "Engineer",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    },
    {
      name: "Martinez",
      role: "Teacher",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    },
    {
      name: "Leanardo",
      role: "Footballer",
      image: UserImage,
      description: "Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
    }
];

const [currentSlide, setCurrentSlide] = useState(0);

const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1));
};

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

return (
    <>
    <section id="about">
        <section className="wrapper">
            <section class="about">
                <div class="head">
                    <h3>What Our Customer Say About Us</h3>
                    <div class="right">
                        <img class="left-arrow" src={LeftArrow} alt='Left-Arrow' onClick={handlePrevSlide} />
                        <img class="right-arrow" src={RightArrow} alt='Right-Arrow' onClick={handleNextSlide}/>
                    </div>
                </div>
                <div className="feedbacks-slider-container">
                    <div className="feedbacks-slider">
                        <div className="feedbacks-track" style={{ transform: `translateX(-${currentSlide * 50}%)`, transition: 'transform 0.5s ease'}}>
                            <div className="feedback-slide">
                                {feedbacks.slice(0, 3).map((feedback) => (
                                <div className="feedback-card">
                                    <img src={QuoteIcon} alt='Quote' />
                                    <p>{feedback.description}</p>
                                    <div class="role">
                                        <img src={UserImage} alt='User-Image' />
                                            <div class="name">
                                                <h4>{feedback.name}</h4>
                                                <small>{feedback.role}</small>
                                            </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <div className="feedback-slide">
                                {feedbacks.slice(3, 6).map((feedback) => (
                                <div className="feedback-card">
                                    <img src={QuoteIcon} alt='Quote' />
                                    <p>{feedback.description}</p>
                                    <div class="role">
                                        <img src={UserImage} alt='User-Image' />
                                        <div class="name">
                                            <h4>{feedback.name}</h4>
                                            <small>{feedback.role}</small>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</section>
</>
  );
};

export default FeedbacksSlider;