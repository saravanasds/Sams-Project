import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from 'react-spinners/ClipLoader';

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

   // Scroll to the top of the page when the component is mounted
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true before sending the email

    emailjs
      .sendForm(
        'service_u7ectm4',
        'template_sv16143',
        form.current,
        'IJ7EEY9C_YJvZ3SLZ'
      )
      .then(
        () => {
          toast.success('Email sent successfully!', {
            position: "top-center",
          });
        },
        (error) => {
          toast.error(`Failed to send email: ${error.text}`, {
            position: "top-center",
          });
        }
      )
      .finally(() => {
        setLoading(false); // Set loading to false after email sending is completed
      });
  };

  return (
    <div className="w-full mx-auto bg-center bg-white rounded-lg">
      <div
        className="w-full lg:h-[350px] h-[200px] bg-center bg-cover object-cover border-[#070F4E] border-2"
      // style={{
      //   backgroundImage: `url(${ContactBg})`,
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   backgroundAttachment: "fixed",
      // }}
      >
        <div className="w-full h-full bg-black bg-opacity-30 backdrop-blur-[2px] bg-center bg-cover object-cover text-center flex justify-center items-center">
          <h2
            className="lg:text-5xl text-3xl font-bold text-white tracking-wider"
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Contact Us
          </h2>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />

      <div className="lg:py-10 py-5">
        

        <div className="lg:py-5 mb-8 flex flex-col justify-center items-center" data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
          <p className="lg:text-lg text-sm px-5 mb-4 font-semibold text-center text-primary tracking-wider">
            We'd love to hear from you! Here’s how you can reach us:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:pt-10 gap-16 lg:px-20 py-3">
            <div className="flex flex-col justify-center items-center">
              <MdLocationPin className="lg:text-5xl text-3xl text-secondary text-center mb-5" />
              <p className="text-primary text-sm font-medium text-center">
                Location
                <br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <FaPhone className="lg:text-5xl text-3xl text-secondary mb-5" />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Phone
                <br />
                9994476524
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <IoMdMail className="lg:text-5xl text-3xl text-secondary text-center mb-5 " />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Email
                <br />
                example@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <h1 className="lg:text-3xl text-xl font-bold  text-center text-primary tracking-wider">
          Get In Touch
        </h1>
        <div className="w-full lg:w-[60%] mx-auto my-8 px-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                rows="4"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={loading} // Disable button while loading
                className={`w-full py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
              >
                {loading ? <ClipLoader size={25} color={"#123abc"} loading={loading} /> : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        
      </div>

    </div>
  );
};

export default ContactPage;
