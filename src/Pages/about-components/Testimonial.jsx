"use client";

import React, { useState, useEffect } from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "This clinic has provided exceptional care and guidance. The consultants are incredibly knowledgeable and empathetic.",
      author: "John Doe",
    },
    {
      text: "I highly recommend this facility! The services are top-notch, and the staff genuinely cares about their patients' well-being.",
      author: "Jane Smith",
    },
    {
      text: "I've had a wonderful experience here. The physiotherapists are skilled, professional, and very approachable.",
      author: "Samuel Green",
    },
    {
      text: "The personalized treatment plans and expert guidance made a significant difference in my recovery journey. Thank you!",
      author: "Emily Carter",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match transition duration

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:py-20 py-10 bg-white text-gray-700">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-5 tracking-wide text-primary-dark"
        //   style={{ textShadow: "2px px 1px rgba(0,0,0,0.7)" }}
        >
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-700"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: "flex",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-6 lg:px-12 py-5 border-[1px] border-primary-dark"
                style={{ maxWidth: "100%" }}
              >
                <blockquote className="italic text-lg sm:text-xl lg:text-2xl mb-4">
                  "{testimonial.text}"
                </blockquote>
                <p className="text-sm sm:text-base lg:text-lg font-semibold">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-lg p-3 rounded-full hover:bg-primary-dark hover:text-white shadow-lg flex items-center justify-center transition"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-primary-dark text-lg p-3 rounded-full hover:bg-primary-dark hover:text-white shadow-lg flex items-center justify-center transition"
        >
          &#8594;
        </button>

        {/* Indicators */}
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index
                  ? "bg-white border border-primary-dark"
                  : "bg-primary-dark hover:border hover:bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
