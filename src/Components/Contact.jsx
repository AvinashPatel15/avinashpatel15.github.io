import React from "react";

const Contact = () => {
  return (
    <div name="Contact" className="w-full p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold text-violet-600 inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ce8b35ac-bf10-4af9-bf0f-a1aa0c3a43b2"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name Please"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-2 border-violet-400"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail Please"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none my-4 border-2 border-violet-400"
            />
            <textarea
              name="massage"
              placeholder="Enter Your Massage"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-2 border-violet-400"
            ></textarea>
            <button className="bg-gradient-to-b from-cyan-500 to-violet-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
