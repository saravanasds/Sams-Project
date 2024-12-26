
import React, { useState } from 'react';

import Chiropractor from "../../assets/ServiceImages/chiropractor.jpg";
import sports from "../../assets/ServiceImages/sports.jpg";
import homeCare from "../../assets/ServiceImages/homeCare.jpg";
import paediatric from "../../assets/ServiceImages/paediatric.jpg";
import neuro from "../../assets/ServiceImages/neuro.jpg";
import pre from "../../assets/ServiceImages/pre.jpg";
import geriatric from "../../assets/ServiceImages/geriatric.jpg";
import strength from "../../assets/ServiceImages/strength.jpg";
import advance from "../../assets/ServiceImages/advance.jpg";
import womencare from "../../assets/ServiceImages/womencare.jpg";
import musculo from "../../assets/ServiceImages/musculo.jpg";
import vestibular from "../../assets/ServiceImages/vestibular.jpg";
import workStrain from "../../assets/ServiceImages/workStrain.jpg";
import therapeutic from "../../assets/ServiceImages/therapeutic.jpg";
import tele from "../../assets/ServiceImages/tele.jpg";
import cardiac from "../../assets/ServiceImages/cardiac.jpg";


const services = [
  {
    imgSrc:Chiropractor,
    alt: "Chiropractor Treatment",
    title: "Chiropractor Treatment",
    description: "Expert care to relieve pain and improve joint function.",
    detailedDescription:
      "Chiropractor treatments focus on restoring spinal alignment and relieving nerve pressure to enhance overall wellness. Our experienced professionals use gentle techniques tailored to your specific needs.",
  },
  {
    imgSrc:sports,
    alt: "Sports Physiotherapy",
    title: "Sports Physiotherapy",
    description: "Helping athletes recover and enhance performance.",
    detailedDescription:
      "Sports physiotherapy offers targeted care for athletes, addressing injuries, improving strength, and boosting flexibility. We help you get back to peak performance quickly and safely.",
  },
  {
    imgSrc:homeCare,
    alt: "Home Care Physiotherapy",
    title: "Home Care Physiotherapy",
    description: "Convenient therapy sessions in the comfort of your home.",
    detailedDescription:
    "Receive professional physiotherapy treatments without leaving the comfort of your home. Our experienced physiotherapists offer personalized care for a wide range of conditions, making therapy convenient and tailored to your needs.",
  },
  {
    imgSrc:paediatric,
    alt: "Pediatric Physiotherapy",
    title: "Pediatric Physiotherapy",
    description: "Therapy for children to enhance mobility and development.",
    detailedDescription:
    "Specialized care for children with developmental, neurological, and musculoskeletal conditions. Our therapists use age-appropriate techniques to improve mobility, coordination, and overall physical development in a fun and engaging way.",
  },
  {
    imgSrc:neuro,
    alt: "Neuro Physiotherapy",
    title: "Neuro Physiotherapy",
    description: "Rehabilitation for neurological disorders.",
    detailedDescription:" Specialized rehabilitation services designed to treat neurological disorders such as stroke, Parkinson's disease, multiple sclerosis, and spinal cord injuries. Our neuro physiotherapists use targeted techniques to improve mobility, balance, and daily function."
  },
  {
    imgSrc:pre,
    alt: "Pre and Post Surgery Rehab",
    title: "Pre and Post Surgery Rehab",
    description: "Ensuring optimal recovery before and after surgery.",
     detailedDescription:" Prepare for surgery and recover effectively with our pre and post-surgery rehabilitation services. We focus on strengthening muscles, improving range of motion, and reducing pain, ensuring a smoother recovery process and optimal outcomes."
  },
  {
    imgSrc:geriatric,
    alt: "Geriatric Physiotherapy",
    title: "Geriatric Physiotherapy",
    description: "Supporting mobility and independence for seniors.",
     detailedDescription:"Offering dedicated physiotherapy for seniors to help maintain mobility, improve strength, and prevent falls. Our geriatric physiotherapy services aim to enhance independence and quality of life for older adults."
  },
  {
    imgSrc:strength,
    alt: "Strength Training",
    title: "Strength Training",
    description: "Building strength for improved physical function.",
     detailedDescription:"A personalized program focused on building muscular strength, improving physical performance, and increasing endurance. Ideal for those looking to enhance fitness levels, prevent injury, or support rehabilitation."
  },
  {
    imgSrc:advance,
    alt: "Advanced Physiotherapy",
    title: "Advanced Physiotherapy",
    description: "Cutting-edge techniques for effective treatment.",
     detailedDescription:"Cutting-edge treatment techniques and advanced methods to address complex injuries and conditions. We incorporate the latest research and technology to ensure you receive the most effective care for your recovery."
  },
  {
    imgSrc:womencare,
    alt: "Women's Health Physiotherapy",
    title: "Women's Health Physiotherapy",
    description: "Specialized care for women’s unique health needs.",
     detailedDescription:" Specialized physiotherapy addressing the unique health challenges women face, including pelvic health, pre and post-natal care, osteoporosis prevention, and more. Our therapists offer solutions to improve overall well-being and quality of life."
  },
  {
    imgSrc:musculo,
    alt: "Musculoskeletal Physiotherapy",
    title: "Musculoskeletal Physiotherapy",
    description: "Relieving pain and restoring musculoskeletal function.",
     detailedDescription:"Focused on relieving pain and restoring function to the bones, muscles, and joints. Whether treating injuries, chronic pain, or mobility issues, our musculoskeletal physiotherapy aims to return you to full activity levels."
  },
  {
    imgSrc:vestibular,
    alt: "Vestibular Rehabilitation",
    title: "Vestibular Rehabilitation",
    description: "Treatment for balance and dizziness disorders.",
     detailedDescription:"This specialized therapy helps individuals with balance and dizziness disorders, including vertigo. Our vestibular rehabilitation services provide exercises to reduce symptoms, improve balance, and prevent falls."
  },
  {
    imgSrc:workStrain,
    alt: "Workplace Ergonomics",
    title: "Workplace Ergonomics",
    description: "Assessments to improve workplace comfort and efficiency.",
     detailedDescription:" Assessments and solutions designed to optimize your workplace environment, improving comfort and reducing the risk of strain or injury. We help ensure your workstation is ergonomically friendly, increasing productivity and health."
  },
  {
    imgSrc:therapeutic,
    alt: "Therapeutic Massage",
    title: "Therapeutic Massage",
    description: "Relaxation and pain relief through therapeutic techniques.",
     detailedDescription:"Therapeutic techniques tailored to relieve muscle tension, reduce pain, and promote relaxation. This treatment can assist in the recovery of injuries, reduce stress, and enhance overall wellness."
  },
  {
    imgSrc:tele,
    alt: "Tele-physiotherapy",
    title: "Tele-physiotherapy",
    description: "Online consultations for convenient care.",
     detailedDescription:"Receive physiotherapy services remotely through online consultations. This convenient service offers access to expert guidance and treatment plans from the comfort of your home, ideal for those with mobility challenges or busy schedules."
  },
  {
    imgSrc:cardiac,
    alt: "Cardiac Rehabilitation",
    title: "Cardiac Rehabilitation",
    description: "Comprehensive care for heart health recovery.",
     detailedDescription:"A comprehensive program designed to support recovery after heart surgery, heart attack, or other cardiovascular events. We focus on improving heart health, endurance, and overall physical function through safe and monitored exercise plans."
  },

  // Add detailed descriptions for other services similarly...
];

const Services = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Services Section */}
      <section className="md:py-16 bg-white">
        <div className="container mx-auto px-3">
          <h2 className="md:text-3xl text-2xl font-bold text-center text-cyan-700 mt-2">
            Our Services
          </h2>
          <p className="mt-4 text-center text-gray-600 tracking-wide md:text-lg text-base font-medium">
            From rehabilitation to preventive care, we’re dedicated to improving your mobility, enhancing your quality of life, 
            and empowering you to achieve your wellness goals.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-3 border-[1px] border-cyan-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={service.imgSrc}
                  alt={service.alt}
                  className="mx-auto w-full h-60 object-cover mb-3 rounded-lg border-[1px] border-cyan-500"
                />
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-cyan-700">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                  {/* Show More Toggle */}
                  <div
                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                      showMore[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="mt-2 text-gray-600">{service.detailedDescription}</p>
                  </div>
                  <button
                    className="mt-4 flex items-center text-cyan-600 hover:text-cyan-800 font-medium focus:outline-none"
                    onClick={() => toggleShowMore(index)}
                  >
                    {showMore[index] ? "Show Less" : "Show More"}
                    <span
                      className={`ml-2 transform transition-transform duration-300 ${
                        showMore[index] ? "rotate-180" : ""
                      }`}
                    >
                      ➤
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
