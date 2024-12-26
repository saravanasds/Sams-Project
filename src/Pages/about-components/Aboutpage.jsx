

import React from "react";
import Team from "../about-components/Team";
import dean from "../../assets/dean.jpg"
import about3 from "../../assets/about3.jpg"
import clinical from "../../assets/ServiceImages/clinical.jpg"
import about2 from "../../assets/about2.jpg"
import about4 from "../../assets/about4.jpg"

const AboutPage = () => {
  return (
    <div className="min-h-screen ">        n           
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="relative">
            <img
              src={dean}
              alt="Dean or Doctor"
              width={500}
              height={600}
              className="w-full lg:w-full rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-sm rounded-b-xl md:p-4 p-2 text-white text-center tracking-wider">
              <h2 className="md:text-2xl text-xl font-bold mb-2">
                Meet Dr. Sam Clement
              </h2>
              <p className="md:text-lg text-base font-medium">
                BPT., MPT., (PAEDIATRIC).
              </p>
            </div>
          </div>

          <div className="lg:w-2/3">
            <p className="md:text-lg text-base text-gray-700 leading-relaxed mb-4 tracking-wide text-justify">
            <b>Dr. Sam Clement</b>, the founder of Sam's Physio & Rehab, is a renowned physiotherapist dedicated to helping individuals regain mobility and improve their quality of life. With a commitment to excellence, <b>Dr. Sam Clement</b> has built a center that combines advanced techniques, personalized care, and a holistic approach to rehabilitation.
            </p>
            <p className="md:text-lg text-base text-gray-700 leading-relaxed tracking-wide mb-4 text-justify">
              Under his leadership, our team has helped countless individuals
              overcome physical challenges, whether through sports injury
              recovery, chronic pain management, or rehabilitation after
              surgery. His vision is to provide holistic care tailored to the
              needs of each client.
            </p>
            <p className="md:text-lg text-base text-gray-700 leading-relaxed tracking-wide text-justify">
              <b>At Sam's Physio & Rehab</b>, we provide expert care for sports
              injuries, chronic pain, and post-surgical recovery. 
              With tailored treatment plans, advanced techniques, a compassionate approach, and a focus on long-term wellness, we help you regain mobility and improve your quality of life.
            </p>
          </div>
        </div>
      </div>

      <Team />

      {/* About Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold text-center text-primary-dark mb-6">
          Sam's Physio & Re hab.
        </h2>
        <p className="md:text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
          At <span className="font-semibold ">Sam's Physio & Rehab</span>, our
          mission is to empower individuals to achieve their best physical
          health. We are a team of experienced physiotherapists dedicated to
          providing personalized care using evidence-based practices and
          state-of-the-art facilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Value 1 */}
          <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
            <img
              src={about3}
              alt="Experienced Team"
              className="w-24 h-24 object-cover rounded-full  border-2 border-primary-dark"
            />
            <div className="md:text-start text-center">
              <h3 className="text-xl font-semibold text-primary-dark">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our team combines years of experience with the latest
                physiotherapy techniques to ensure the best outcomes for our
                clients.
              </p>
            </div>
          </div>

          {/* Core Value 2 */}
          <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
            <img
              src={clinical}
              alt="Personalized Care"
              className="w-24 h-24 object-cover object-left rounded-full border-2 border-primary-dark"
            />
            <div className="md:text-start text-center">
              <h3 className="text-xl font-semibold text-primary-dark">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                We tailor each treatment plan to the unique needs of every
                client, ensuring a holistic approach to recovery.
              </p>
            </div>
          </div>

          {/* Core Value 3 */}
          <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
            <img
              src={about2}
              alt="State-of-the-Art Facilities"
              className="w-24 h-24 object-cover rounded-full border-2 border-primary-dark"
            />
            <div className="md:text-start text-center">
              <h3 className="text-xl font-semibold text-primary-dark">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-600">
                Our center is equipped with advanced equipment and tools to
                deliver effective treatments.
              </p>
            </div>
          </div>

          {/* Core Value 4 */}
          <div className="flex md:flex-row flex-col md:items-start items-center gap-4">
            <img
              src={about4}
              alt="Compassionate Support"
              className="w-24 h-24 object-cover rounded-full  border-2 border-primary-dark"
            />
            <div className="md:text-start text-center">
              <h3 className="text-xl font-semibold text-primary-dark">
                Compassionate Support
              </h3>
              <p className="text-gray-600">
                We understand the challenges of recovery and provide a
                supportive environment for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-dark py-12 text-center text-white px-5">
        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
          Ready to Start Your Journey to Recovery?
        </h3>
        <p className="md:text-lg lg:text-xl">
          Contact us today to schedule your first session or learn more about
          our services.
        </p>
        <a href="tel:+917200220631">
        <button className="mt-6 px-6 py-3 bg-white text-primary-dark font-semibold rounded-md hover:bg-gray-200">
          Get in Touch
        </button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
