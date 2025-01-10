import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AboutPage from "../Pages/about-components/Aboutpage";
import Testimonial from "../Pages/about-components/Testimonial";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[50vh]">
      <Helmet>
        <title>About Us | Sams-Physio-Rehab</title>
        <meta
          name="description"
          content="Learn about Sams-Physio-Rehab, our mission to provide top-quality physiotherapy, and the inspiring testimonials from our happy clients."
        />
        <meta name="author" content="Sams-Physio-Rehab" />
        <meta property="og:title" content="About Us | Sams-Physio-Rehab" />
        <meta
          property="og:description"
          content="Discover the story and vision behind Sams-Physio-Rehab and how we bring quality rehabilitation services to our clients."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samsphysiorehab.in/about" />
        <meta property="og:image" content="/logo.jpeg" />
      </Helmet>
      <AboutPage />
      <Testimonial />
    </div>
  );
};

export default About;
