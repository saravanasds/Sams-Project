
import React, { useState, useEffect } from "react";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import hero from "../../assets/hero.jpg";
import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:hero,
      title: "Physiotherapy Center",
      description: "We provide the best physiotherapy services for you.",
    },
    {
      id: 2,
      image:carousel1,
      title: "Comprehensive Care",
      description: "Our team is dedicated to your health and recovery.",
    }, 
    {
      id: 3,
      image:carousel2,
      title: "State-of-the-Art Facilities",
      description: "Experience the latest advancements in physiotherapy.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-[600px] overflow-hidden">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full lg:h-[600px] flex items-center justify-center relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Content */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute text-center text-white px-4 tracking-wide" style={{textShadow:"2px 2px 2px rgba(0,0,0,0.7"}}>
              <h2 className="lg:text-5xl text-2xl font-extrabold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="lg:text-xl text-base drop-shadow-md">
                {slide.description}
              </p>
              {/* <button className="bg-primary-dark text-white text-sm lg:text-base font-medium rounded-3xl px-4 lg:px-6 py-2 my-5 tracking-wide hover:bg-transparent hover:text-primary-dark border-2 border-primary-dark transition ">
              Book Appointment
            </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-dark text-white p-3 rounded-full hover:bg-cyan-500 shadow-lg hidden md:block"
      >
      <IoIosArrowBack/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-dark text-white p-3 rounded-full hover:bg-cyan-500 shadow-lg hidden md:block"
      >
       < IoIosArrowForward/>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentSlide === index
                ? "bg-primary-dark border-white"
                : "bg-transparent border-primary-dark hover:bg-cyan-800"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
