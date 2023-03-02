import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiTwotonePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div name="Contact" className="w-full p-4 pt-20">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold text-violet-600 inline border-b-4 border-gray-500">
            Contact
          </p>
          <div className="flex mt-4">
            <ul className="grid grid-cols-2 auto-rows-auto md:flex md:flex-row gap-5 md:gap-3">
              <li
                className={
                  "flex justify-between items-center h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                }
              >
                <a
                  href="mailto:avinashpatel9755@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center w-full text-white"
                >
                  avinashpatel9755@gmail.com <HiOutlineMail size={30} />
                </a>
              </li>

              <li
                className={
                  "flex justify-between items-center h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                }
              >
                <a className="flex justify-between items-center w-full text-white">
                  9131864148 <AiTwotonePhone size={30} />
                </a>
              </li>

              <li
                className={
                  "flex justify-between items-center h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                }
              >
                <a
                  href="https://www.linkedin.com/in/avinash-patel-23a265237/"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-between items-center w-full text-white"
                >
                  Linkedin <FaLinkedin size={30} />
                </a>
              </li>

              <li
                className={
                  "flex justify-between items-center h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                }
              >
                <a
                  href="https://github.com/AvinashPatel15"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center w-full text-white"
                >
                  GitHub <FaGithub size={30} />
                </a>
              </li>

              <li
                className={
                  "flex justify-between items-center h-14 px-4 bg-gray-500 rounded-md cursor-pointer"
                }
              >
                <a
                  onClick={() =>
                    window.open(
                      `https://drive.google.com/file/d/1hapX1uRFtZ90J-0qiOoAcML9MlzsXRPM/view?usp=sharing`
                    )
                  }
                  href="/fw20_0025_Avinash-Patel-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center w-full text-white"
                >
                  Resume <BsFillPersonLinesFill size={30} />
                </a>
              </li>
            </ul>
          </div>
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
              className="p-2 bg-transparent rounded-md focus:outline-none border-2 border-violet-400"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your E-mail Please"
              className="p-2 bg-transparent rounded-md focus:outline-none my-4 border-2 border-violet-400"
              required
            />
            <textarea
              name="massage"
              placeholder="Enter Your Massage"
              rows="10"
              className="p-2 bg-transparent rounded-md focus:outline-none border-2 border-violet-400"
              required
            ></textarea>
            <button type="submit" className="bg-gradient-to-b from-cyan-500 to-violet-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
