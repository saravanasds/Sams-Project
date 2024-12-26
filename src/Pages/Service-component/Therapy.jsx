

import React, { useState, useEffect, useRef } from "react";

import inter from "../../assets/Therapy/inter.jpg";
import chiro from "../../assets/Therapy/chiro.jpg";
import ultra from "../../assets/Therapy/ultra.jpg";
import laser from "../../assets/Therapy/laser.jpg";
import traction from "../../assets/Therapy/traction.jpg";
import wax from "../../assets/Therapy/wax.jpg";
import tap from "../../assets/Therapy/tap.jpg";
import dry from "../../assets/Therapy/dry.jpg";
import thermoheat from "../../assets/Therapy/thermoheat.jpg";
import electrical from "../../assets/Therapy/electrical.jpeg";
import drainage from "../../assets/Therapy/drainage.jpg";
import track from "../../assets/Therapy/track.jpg";


const TherapyCarousel = () => {
  const therapies = [
    { name: "Interferential Therapy", image:inter},
    { name: "Chiropractic Therapy", image:chiro },
    { name: "Ultrasound Therapy", image:ultra},
    { name: "Laser Therapy", image: laser },
    { name: "Traction Therapy", image:traction},
    { name: "Wax Therapy", image: wax},
    {
      name: "Kinesio Taping / Taping Therapy",
      image:tap,
    },
    { name: "Dry Needling Therapy", image:dry},
    {
      name: "Thermotherapy (heat Therapy)",
      image: thermoheat,
    },
    {
      name: "Transcutaneous Electrical Nerve Stimulation",
      image:electrical,
    },
    {
      name: "Lymphatic Drainage Massage",
      image:drainage,
    },
    {
      name: "Overhead Track Harness Therapy",
      image:track,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === therapies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? therapies.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate slide width dynamically
  const getSlideWidth = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const cardsToShow =
        window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      return sliderWidth / cardsToShow;
    }
    return 0;
  };

  const renderSlides = () => {
    const slides = [0]; // Your slides data
    return slides.map((slide, index) => {
      const opacity = index === 1 ? 1 : 0.6; // Second slide (index 1) has opacity 1, others have opacity 0.6
      return (
        <div
          key={slide.id}
          style={{
            width: `${getSlideWidth()}px`,
            opacity: opacity,
          }}
          className="slider-slide"
        >
          {/* Slide content */}
        </div>
      );
    });
  };

  const slideWidth = getSlideWidth();

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(0); // Reset slide on resize to prevent misalignment
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="lg:py-10 py-10 bg-gray-100 relative my-5 border-2">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold text-primary-dark md:mb-10 mb-5 tracking-wide"
          //   style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Therapies We Offer
        </h2>

        <div className="overflow-hidden relative " ref={sliderRef}>
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
            }}
          >
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-4`}
                style={{
                  width: `${slideWidth}px`,
                  opacity: index === currentSlide ? 1 : 1, // Fully visible for the current slide
                  // Only scale the center image, not the others
                  transform: index === currentSlide ? "scale(1)" : "scale(1)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              >
                <div className="relative w-full h-[280px] shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 p-2 md:mb-10 bg-white border-[1px] border-primary-dark">
                  <div className="relative w-full mx-auto mb-4 flex flex-col justify-center items-center">
                    <div className="w-full h-[200px] overflow-hidden rounded-lg border-[1px] border-primary-dark">
                      <img
                        src={therapy.image}
                        alt={therapy.name}
                        width={350}
                        height={200} // Set this to match the container height
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-primary-dark">
                    {therapy.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {therapies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-white border-primary-dark"
                : "bg-primary-dark hover:border-primary-dark hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TherapyCarousel;
