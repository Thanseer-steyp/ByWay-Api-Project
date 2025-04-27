import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import SinglePageHeader from '../screens/SinglePageHeader'
import CourseDetailingSection from "../screens/CourseDetailingSection"
import CourseFeatures from '../screens/CourseFeatures'
import SyllabusSection from '../screens/SyllabusSection'
import ReviewsSection from '../screens/ReviewsSection'
import AboutSection from '../screens/AboutSection'
import Courses from '../screens/CoursesSection'
import Footer from '../screens/Footer'
import courses from '../data/courseData'

import { useEffect } from 'react'

function Course({course_title}) {

  const { id } = useParams();

  const courseName = courses.find(course => course.id === parseInt(id)) || { title: "Course Not Found" };

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <>
        <Helmet>
            <title>Byway | Products</title>
            <link rel="icon" type="image/svg+xml" href="../../../public/favicon.ico" />
        </Helmet>
        
        <SinglePageHeader/>

        <CourseDetailingSection />

        <CourseFeatures />

        <SyllabusSection />

        <ReviewsSection />

        <AboutSection />

        <Courses course_title="More Products Like This" />

        <Footer />


        
    </>
  )
}

export default Course