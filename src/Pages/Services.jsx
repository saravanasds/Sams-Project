import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Servicepage from "../Pages/Service-component/Servicepage";
import ServicesDetails from "../Pages/Service-component/ServicesDetails";
import Therapy from "../Pages/Service-component/Therapy";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[50vh]">
      <Helmet>
        <title>Services | Sams-Physio-Rehab</title>
        <meta
          name="description"
          content="Explore our comprehensive physiotherapy services, specialized therapies, and rehabilitation programs designed to help you recover and thrive."
        />
        <meta name="author" content="Sams-Physio-Rehab" />
        <meta property="og:title" content="Services | Sams-Physio-Rehab" />
        <meta
          property="og:description"
          content="Discover the best physiotherapy and rehabilitation services to support your journey to recovery."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://samsphysiorehab.in/services" />
        <meta property="og:image" content="/logo.jpeg" />
      </Helmet>
      <Servicepage />
      <ServicesDetails />
      <Therapy />
    </div>
  );
};

export default Services;
