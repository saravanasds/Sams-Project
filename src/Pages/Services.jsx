import React, { useEffect } from "react";
import Servicepage from "../Pages/Service-component/Servicepage";
import ServicesDetails from "../Pages/Service-component/ServicesDetails";
import Therapy from "../Pages/Service-component/Therapy";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-[50vh] ">
      <Servicepage/>
      <ServicesDetails/>
      <Therapy/>
    </div>
  );
};

export default Services;
