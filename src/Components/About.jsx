import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full mt-4">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <div className="pb-8">
          <div className="mb-6">
            <p className="text-4xl font-bold inline border-b-4 border-gray-900 text-violet-600">
              About me
            </p>
          </div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Hi, I'm <span className="text-violet-600">Avinash Patel</span>
          </p>
        </div>
        <p>
          Dedicated and efficient aspiring full stack web developer. Worked
          through 1200+ hours of Bootcamp structure, learning JavaScript,
          Reactjs, MongoDB, Expressjs, Nodejs, and Data Structures and
          Algorithms along with collaborative and personal projects. Eager to
          tackle web development challenges to achieve lasting impacts on user
          experience.
        </p>
        <div className="mb-6 mt-11">
          <p className="text-4xl font-bold inline border-b-4 border-gray-900 text-violet-600">
            Education
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex p-3 sm:p-5 gap-5 bg-violet-100 hover:bg-violet-300 transition duration-700 ease-in-out rounded-lg">
            <div className="bg-violet-600 rounded-full flex h-14 items-center justify-center shrink-0">
              <img
                src="https://subhamukherjee321.github.io/static/media/eduImgBlack.b19a68ba.svg"
                alt="img"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h4 className="text-violet-600 text-2xl mb-2">
                May 2022 - Present
              </h4>
              <div>
                <h3 className="text-bold text-2xl sm:text-3xl">
                  Full Stack Web-Development (Full-Time)
                </h3>
                <h3 className="text-bold text-2xl sm:text-3xl">
                  Masai School, Bangalore
                </h3>
              </div>
            </div>
          </div>
          <div className="flex p-3 sm:p-5 gap-5 bg-violet-100 hover:bg-violet-300 transition duration-700 ease-in-out rounded-lg">
            <div className="bg-violet-600 rounded-full flex h-14 items-center justify-center shrink-0">
              <img
                src="https://subhamukherjee321.github.io/static/media/eduImgBlack.b19a68ba.svg"
                alt="img"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h4 className="text-violet-600 text-2xl mb-2">
                July 2021 - Present
              </h4>
              <div>
                <h3 className="text-bold text-2xl sm:text-3xl">
                  Bachelor of computer application
                </h3>
                <h3 className="text-bold text-2xl sm:text-3xl">
                  Rajiv Gandhi College, Katni, Madhya Pradesh
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
