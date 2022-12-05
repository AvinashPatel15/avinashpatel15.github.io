import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const Links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Project",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full px-4 h-20 text-black bg-slate-400 fixed">
      <div>
        {/* <img
          src="https://logos.textgiraffe.com/logos/logo-name/Avinash-designstyle-boots-m.png"
          alt="Avinash Logo"
          className="w-2/5 h-auto cursor-pointer"
        /> */}
        <h1 className="text-3xl font-signature sm:ml-2 sm:text-5xl ">
          Avinash
        </h1>
      </div>

      <ul className="hidden md:flex">
        {Links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
        <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200">
          <a href="/Avinash-Patel-Resume.pdf">Resume</a>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-slate-400 text-black">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <a href="/Avinash-Patel-Resume.pdf">Resume</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
