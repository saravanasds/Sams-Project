
import React from "react";
import bg from "../../assets/bg.jpg";
import about4 from "../../assets/about4.jpg";

const Aboutdescription = () => {
  return (
    <div
      className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-5 lg:py-16z py-5 bg-gray-50 rounded-lg shadow-md px-5 lg:px-10"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Your content here */}


      {/* Image Section */}
      <div className="lg:w-1/3 w-full overflow-hidden rounded-lg  p-2 ">
        <img
          src={about4}
          alt="About Us"
          width={300}
          height={300}
          className="w-full h-full object-cover transform transition-transform duration-300 rounded-full border-[1px] border-primary-dark"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 w-full text-justify text-gray-700 lg:leading-relaxed leading-loose">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary-dark mb-4">
          Helping You Move Better, Live Better
        </h2>
        <p className="text-base lg:text-lg mb-6 text-gray-600">
          At Sam's Physio & Rehab, we provide expert physiotherapy and rehabilitation services tailored to your needs. Whether recovering from an injury or managing a condition, our compassionate team uses evidence-based techniques and state-of-the-art facilities to restore mobility, relieve pain, and enhance your quality of life. Let us help you move better and live healthier!
        </p>

        <ul className="space-y-4 mb-6 tracking-wide">
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-semibold">✔</span>
            <p>Personalized treatment plans designed to meet your specific needs.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-semibold">✔</span>
            <p>Comprehensive care with a focus on recovery, mobility, and well-being.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-500 font-semibold">✔</span>
            <p>Experienced and compassionate team committed to your health journey.</p>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-4 flex items-center justify-center md:justify-start">
          <a href="tel:+917200220631">
            <button className="bg-primary-dark font-medium text-white md:px-6 px-3 md:py-2 py-1 rounded-2xl md:bg-primary-dark hover:bg-white md:hover:bg-cyan-500 hover:text-primary-dark md:hover:text-white md:text-white border-2 border-gray-200 transition-all duration-300">
              Get Ready to Your Appointment
            </button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Aboutdescription;
