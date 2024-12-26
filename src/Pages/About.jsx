import React, { useEffect } from 'react'
import AboutPage from "../Pages/about-components/Aboutpage"
import Testimonial from "../Pages/about-components/Testimonial"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full min-h-[50vh]'>
       <AboutPage/>
       <Testimonial/>
    </div>
  )
}

export default About