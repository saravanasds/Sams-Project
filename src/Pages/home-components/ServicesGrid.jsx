
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import physio from "../../assets/HomeService/physio.jpg";
import rehab1 from "../../assets/HomeService/rehab1.jpg";
import sportinju from "../../assets/HomeService/sportinju.jpg";
import wellness from "../../assets/HomeService/wellness.jpg";
import pain1 from "../../assets/HomeService/pain1.jpg";
import cardiac1 from "../../assets/HomeService/cardiac1.jpg";
import surgery from "../../assets/HomeService/surgery.jpg";
import peadia1 from "../../assets/HomeService/peadia1.jpg";


const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      image: physio,
      title: "Physiotherapy",
      description: "Comprehensive care to improve mobility and strength.",
    },
    {
      id: 2,
      image: rehab1,
      title: "Rehabilitation",
      description: "Post-injury or surgery recovery for optimal health.",
    },
    {
      id: 3,
      image: sportinju,
      title: "Sports Therapy",
      description: "Specialized therapy for athletes to enhance performance.",
    },
    {
      id: 4,
      image:wellness,
      title: "Wellness Programs",
      description: "Programs designed for overall health and wellbeing.",
    },
    {
      id: 5,
      image:pain1,
      title: "Pain Management",
      description: "Targeted therapy to relieve chronic and acute pain.",
    },
    {
      id: 6,
      image:cardiac1,
      title: "Cardiac Rehab",
      description: "Rehabilitation for heart patients to regain health.",
    },
    {
      id: 7,
      image:surgery,
      title: "Post-Surgery Recovery",
      description: "Care and therapy for smooth recovery after surgery.",
    },
    {
      id: 8,
      image: peadia1,
      title: "Pediatric Physiotherapy",
      description: "Specialized therapy for children’s growth and mobility.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="lg:py-16 py-6 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="lg:text-3xl text-2xl font-bold text-center mb-4 text-primary-dark">
          Expert Physiotherapy Services Tailored for You
        </h2>
        <p className="lg:text-lg text-base font-medium text-center mb-8 text-gray-600 tracking-wide">
          At Sam's Physio & Rehab, we provide personalized physiotherapy
          services to help you recover, manage pain, and improve mobility. Our
          expert team uses advanced techniques to tailor treatments that enhance
          your quality of life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-2  border-[1px] border-primary-dark"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-44 object-cover transform transition-transform duration-300  hover:opacity-90  border-[1px] border-primary-dark rounded-lg"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">
                  {service.title}
                </h3>
                <p
                  className={`text-gray-600 transition-all ${
                    expanded === service.id ? "max-h-40" : "max-h-12 truncate"
                  }`}
                >
                  {service.description}
                </p>

                {/* Show More */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="flex items-center mt-3 text-primary-dark hover:text-primary-dark font-medium"
                >
                  {expanded === service.id ? "Show Less" : "Show More"}
                  <FaArrowRight
                    className={`ml-2 transform ${
                      expanded === service.id ? "rotate-90" : ""
                    } transition-transform duration-300`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center md:mt-10 mt-8">
          <a
            href="/services" // Direct link to your service page
            className="px-6 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-dark/90 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
