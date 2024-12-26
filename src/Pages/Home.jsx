import React from "react";
import { useEffect } from "react";
import Hero from "../Pages/home-components/Hero"
import Intro from "../Pages/home-components/Intro"
import Staticsection from "../Pages/home-components/Staticsection"
import ServicesGrid from "../Pages/home-components/ServicesGrid"
import Aboutdescription from './home-components/Aboutdescription';
import BeforeAfterSlider from './home-components/BeforeAfterSlider';
import Team from '../Pages/about-components/Team';
import BodypainPoints from './home-components/BodypainPoints';




const Home = () => {
  // Scroll to the top of the page when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full min-h-[50vh] " data-aos="fade-up" >
      <Hero/>
      <Intro/>
      <Staticsection/>
      <Aboutdescription/>
      <ServicesGrid/>
      <BeforeAfterSlider/>
      <Team/>
      <BodypainPoints/>
    </div>
  );
};

export default Home;
