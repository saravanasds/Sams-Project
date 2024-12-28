import React, { useState, useEffect, useRef } from "react";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import bg1 from "../../assets/bg1.jpg";
import Image1 from "../../assets/dean.jpg"
import Image2 from "../../assets/dean.jpg"
import Image3 from "../../assets/dean.jpg"
import Image4 from "../../assets/dean.jpg"
import Image5 from "../../assets/dean.jpg"
import Image6 from "../../assets/dean.jpg"
import Image7 from "../../assets/dean.jpg"
import Image8 from "../../assets/dean.jpg"
import Image9 from "../../assets/dean.jpg"

const AboutTeamSection = () => {
  const team = [
    {
      name: "Dr. Sam Clement",
      role: "BPT MPT (Paediatric)",
      image: Image1,
      bio: "[ Certified Electro dry needling therapy, Cupping therapy,Manipaltion, Chiropractor, IASTM practitioner (Specialized in Pain management) ]",
    },
    {
      name: "Dr.K.Vijayaram",
      role: "BPT",
      image: Image2,
      bio: "[ Certified, Myo fascial trigger release, Chiropractor (Specialized in Exercise therapy) ]",
    },
  
    {
      name: "Dr.Dhivya Dharshini",
      role: "BPT (Female consultant physiotherapist)",
      image: Image3,
      bio: "[ Certified in Yoga science, Myo fascial release, Cupping therapy (Specialized in Paediatrics) ]",
    },
    {
      name: "Dr.S.R.Sam Clinton",
      role: "BPT",
      image: Image4,
      bio: "[ Certified Electro dry needling therapy, Cupping therapy, IASTM practitioner (Specialized in Pain management) ]",
    },
   
    {
      name: "Dr.Jagadeesh",
      role: "Neuro Paediatric Occupational Therapist",
      image: Image5,
      bio: "[ M.O.T (Manipal), D.R.O.T (Munmbai), S.I Trained (USA) ]",
    },
    {
      name: "Dr.Srujun Vadranapu",
      role: "Consultant Orthopedic Surgeon ",
      image: Image6,
      bio: "[ MBBS.,D Ortho,MS Ortho,FSHM FOR,FASM,FSS(France) ]",
      Timing:"Timing : 10 AM - 5 PM (Every month last Sunday)"
    },
    {
      name: "Dr.Vignesh",
      role: "MD, DM",
      image: Image7,
      bio: "[ Specialist Neurologist Doctor]",
    },
    {
      name: "Dr.John Peter",
      role: "Heart and Diabetes Specialist",
      image: Image8,
      bio: "[ PG,DIP (DIABETOLOGY) ]",
      Timing:"Timing : 10 AM - 11 AM (Every Wednesday)"
    },
    {
      name: "Dr.Jai Shree",
      role: "Heart and Diabetes Specialist",
      image: Image9,
      bio: "[ MS,ENT surgeon ]",
      timing:"Timing : 10 AM - 1 PM (Monday to Friday)"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  // Cloned slides for infinite scroll
  const extendedTeam = [
    team[team.length - 1], // Add last slide at the beginning
    ...team,
    team[0], // Add first slide at the end
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);

      // Handle seamless transition
      if (currentSlide === 0) {
        setCurrentSlide(team.length); // Jump to last original slide
      } else if (currentSlide === extendedTeam.length - 1) {
        setCurrentSlide(1); // Jump to first original slide
      }
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide, team.length, extendedTeam.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate slide width dynamically
  const getSlideWidth = () => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const cardsToShow = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      return sliderWidth / cardsToShow;
    }
    return 0;
  };

  const slideWidth = getSlideWidth();

  useEffect(() => {
    const handleResize = () => {
      setCurrentSlide(1); // Reset slide to first original on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="lg:py-20 py-10  relative" style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-4xl font-bold text-primary-dark mb-5 tracking-wide"
          // style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Meet Our Consultants
        </h2>
        <p
          className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium mb-8 tracking-wide"
          // style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Our experienced team is here to provide expert care and guidance.
        </p>

        <div className="overflow-hidden relative" ref={sliderRef}>
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
              transition: isAnimating ? "transform 0.7s ease-in-out" : "none",
            }}
          >
            {extendedTeam.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="w-full h-[380px] bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-[1px] border-primary-dark">
                  <div className="relative h-40 w-40 mx-auto">
                    
                    <img src={member.image}
                      alt={`${member.name} photo`}
                      width={160}
                      height={160}
                      className="rounded-2xl p-1 object-cover border-[1px] border-primary-dark"
                     />
                  </div>
                  <h3 className="text-base sm:text-xl lg:text-xl md:mt-5 mt-5 font-bold text-primary-dark uppercase ">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 py-1 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm sm:text-sm lg:text-base text-gray-700 md:mt-3 tracking-wide">
                    {member.bio}
                  </p>
                  <p className="text-sm sm:text-sm lg:text-base text-gray-700 mt-4">
                    {member.timing}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-base sm:text-lg p-2 sm:p-3 rounded-full hover:bg-primary-dark hover:text-white shadow-lg flex items-center justify-center transition"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-base sm:text-lg p-2 sm:p-3 rounded-full hover:bg-primary-dark hover:text-white shadow-lg flex items-center justify-center transition"
      >
        <IoIosArrowForward />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {team.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
            className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 ${
              currentSlide === index + 1
                ? "bg-white border-primary-dark"
                : "bg-primary-dark hover:border-primary-dark hover:bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AboutTeamSection;
