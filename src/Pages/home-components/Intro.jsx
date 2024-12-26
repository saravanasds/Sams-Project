
import React from "react";
// components/IntroSection.js
const IntroSection = () => {
    return (
      <section className="lg:py-12 py-6 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4">
          Welcome to Sam's Physio & Rehab
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto tracking-wide">
            At Sam's Physio & Re hab, we are dedicated to restoring mobility, reducing pain, and 
            improving quality of life. Our team of experienced physiotherapists tailors every treatment 
            to suit your unique needs, empowering you to achieve your health goals.
          </p>
        </div>
      </section>
    );
  };
  
  export default IntroSection;
  