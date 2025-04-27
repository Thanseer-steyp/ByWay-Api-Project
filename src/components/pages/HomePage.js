import React from 'react'
import { Helmet } from "react-helmet";

import Header from "../screens/Header"
import SpotlightSection from '../screens/SpotlightSection';
import StatsSection from '../screens/StatsSection';
import CategoriesSection from '../screens/CategoriesSection';
import CoursesSection from '../screens/CoursesSection';
import InstructorsSection from '../screens/InstructorsSection';
import AboutSection from '../screens/AboutSection';
import ExploreSection from '../screens/ExploreSection';
import Footer from '../screens/Footer';


function Home(course_title) {
  return (
    <>
        <Helmet>
            <title>Byway</title>
            <link rel="icon" type="image/svg+xml" href="../../../public/favicon.ico" />
        </Helmet>

        <Header />

        <SpotlightSection/>

        <StatsSection/>

        <CategoriesSection/>

        <CoursesSection course_title="Top Products" />

        <InstructorsSection/>

        <AboutSection />

        <ExploreSection/>

        <Footer/>
    </>
  )
}

export default Home