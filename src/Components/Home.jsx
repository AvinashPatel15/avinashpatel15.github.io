import React from "react";
import Avinash from "../Assets/Avinash.jpg";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      {/* bg-gradient-to-b from-black via-black to-gray-800 */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I,m a Full Stack Developer
          </h2>
          <p className="py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            JavaScript, React, Tailwind and Next.JS. I love to explore new
            technologies and leverage them to solve real-life problems.
          </p>
          {/* <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex gap-x-2 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Resume
              <span>
                <AiOutlineDownload size={20} />
              </span>
            </button>
          </div> */}
        </div>

        <div>
          <img
            src={Avinash}
            alt="my-profile"
            className="rounded-2xl mx-auto w-8/12 md:w-90%"
          />
        </div>
      </div>
      <div className="mt-4 sm:mt-0">
        <hr />
      </div>
    </div>
  );
};

export default Home;
