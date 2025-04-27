import React, { useEffect, useState } from 'react'
import "../../App.css"
import StarIcon from "../assets/icons/star.svg"
import { Link } from 'react-router-dom';
import axios from "axios"



function Courses(props) {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setCourses(response.data)
            }).catch(error => {
                console.log(error)
            }) 
    },[]);

    const renderCourses= () => {
        return courses.slice(14,18).map((course)=> (
            <Link to={`/course/${course.id}`} key={course.id}>
                <img class="bg" src={course.image} alt="Course-Image"/>
                <h3>{course.title.slice(0,36)}</h3>
                <small>{course.category}</small> 
                <div className="rating">
                    {Array(Math.round(course.rating.rate)).fill().map((_, index) => (
                    <img key={index} src={StarIcon} alt="Star-Icon" />
                     ))}
                    <small>({course.rating.count})</small>
                </div>
                <h3 class="price">${course.price}</h3>
           </Link>
        ));
    };
  return (
    <>
      <section id="courses">
            <section class="wrapper">
                <section class="courses">
                    <div class="head">
                        <h3>{props.course_title}</h3>
                        <a class="button" href="https://www.steyp.com">See All</a>
                    </div>
                    <div class="body">
                        <ul>
                        {renderCourses()}
                        </ul>
                    </div>
                </section>
            </section>
        </section>
    </>
  )
}

export default Courses
