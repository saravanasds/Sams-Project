import React from "react";
import humanbody from "../../assets/humanbody.png";

const PainPointsSection = () => {
  const painPoints = [
    {
      name: "Neck",
      description:
        "Frequent problems include neck strain and stiffness. Physiotherapy can help by improving neck mobility, reducing pain through manual therapy, and prescribing exercises to strengthen the neck muscles.",
    },
    {
      name: "Shoulder",
      description:
        "Pain often caused by rotator cuff injuries. Physiotherapy focuses on restoring shoulder function through strengthening exercises, stretching, and soft tissue mobilization techniques.",
    },
    {
      name: "Elbow",
      description:
        "Commonly affected by tennis elbow or joint pain. Physiotherapists use techniques like ultrasound therapy, manual mobilization, and specific exercises to reduce inflammation and improve strength.",
    },
    {
      name: "Lower Back",
      description:
        "Lower back pain is a common issue. Physiotherapy addresses this with core stabilization exercises, posture correction, and techniques to alleviate tension and improve flexibility.",
    },
    {
      name: "Knee",
      description:
        "Knee pain, often related to arthritis, is frequent. Physiotherapy includes strengthening exercises for surrounding muscles, joint mobilization, and tailored rehabilitation plans to restore movement.",
    },
    {
      name: "Ankle",
      description:
        "Sprains and instability are typical ankle issues. Physiotherapists provide proprioception exercises, balance training, and manual therapy to restore stability and prevent recurrence.",
    },
  ];

  return (
    <section className="lg:py-20  py-10 bg-gradient-to-b from-cyan-100 via-gray-100 to-blue-100 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-xl md:text-4xl font-bold text-cyan-600 mb-4 md:mb-8 text-center">
          Explore Common Pain Points
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-12 text-center font-medium">
          Learn more about common pain points and how physiotherapy can help.
        </p>

        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Left Column */}
          <div className="grid grid-cols-1 gap-6 md:w-1/2">
            {painPoints
              .slice(0, Math.ceil(painPoints.length / 2))
              .map((point, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 hover:scale-[1.05] transform  hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="md:text-xl text-lg font-bold text-cyan-600 mb-2">
                    {point.name}
                  </h3>
                  <p className=" text-base md:text-lg text-gray-700 tracking-wide">
                    {point.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Center Image */}
          <div className="w-full md:w-auto mx-auto mt-8 md:mt-0">
            <img
              src={humanbody} // Replace with an actual body outline image
              alt="Human Body Pain Points"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6 md:w-1/2">
            {painPoints
              .slice(Math.ceil(painPoints.length / 2))
              .map((point, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:scale-[1.05] transform transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-cyan-600 mb-2">
                    {point.name}
                  </h3>
                  <p className="text-gray-700">{point.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <section className="text-center lg:pt-16 pt-8 px-3">
        <h2 className="lg:text-4xl text-xl text-primary-dark font-bold">
          Ready for Your Appointment ?
        </h2>
        <p className="lg:text-lg text-base text-gray-600 mt-2">
          Book your appointment today and start your journey toward the new you!
        </p>
        
        <a href="tel:+917200220631">
        <button className="mt-6 bg-primary-dark text-white lg:px-8 px-5 lg:py-2 py-1 rounded-full font-medium hover:bg-transparent border-2 border-primary-dark hover:text-primary-dark transition-all tracking-wide">
          Contact Now{" "}
        </button>
        </a>
      </section>
    </section>
  );
};

export default PainPointsSection;
