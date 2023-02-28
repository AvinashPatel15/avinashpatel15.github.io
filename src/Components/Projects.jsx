import React from "react";

import mailchimpclone from "../Assets/mailchimpclone.png";
import youtubeclone from "../Assets/youtubeclone.png";
import bestbuyclone from "../Assets/bestbuyclone.png";
import awakefashion from "../Assets/awakefashion.png";

const Projects = () => {
  const project = [
    {
      id: 1,
      src: youtubeclone,
      demo: "https://youtube-clone-react-pi.vercel.app/",
      code: "https://github.com/AvinashPatel15/Youtube-Clone-React",
      projName: "Youtube Clone",
      Description:
        "YouTube is a free video sharing website that makes it easy to watch online videos.",
      TechStack: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "JavaScript" },
        { stack: "React.JS" },
        { stack: "Material-UI" },
      ],
    },
    {
      id: 2,
      src: mailchimpclone,
      demo: "https://mailchimp-clone-aries.netlify.app",
      code: "https://github.com/AvinashPatel15/Mail-Chimp-Clone",
      projName: "MailChimp Clone",
      Description:
        "Mailchimp is marketing platform that helps you manage and talk to your clients",
      TechStack: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "JavaScript" },
        { stack: "React.JS" },
        { stack: "Chakra-UI" },
      ],
    },
    {
      id: 3,
      src: awakefashion,
      demo: "https://awake-fashion.netlify.app/",
      code: "https://github.com/AvinashPatel15/Awake-Fashion-ReactJS",
      projName: "Awake Fashion",
      Description:
        "Awake Fashion is a retail store selling a wide variety of product categories under a single brand.",
      TechStack: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "JavaScript" },
        { stack: "React.JS" },
        { stack: "Chakra-UI" },
      ],
    },
    {
      id: 4,
      src: bestbuyclone,
      demo: "https://best-buy-clone-aries.netlify.app",
      code: "https://github.com/AvinashPatel15/Best-Buy-Clone",
      projName: "Best-Buy Clone",
      Description:
        "Best buy is a E-commerce electronic website where you buy electric items.",
      TechStack: [
        { stack: "HTML" },
        { stack: "CSS" },
        { stack: "JavaScript" },
        { stack: "BootStrap" },
      ],
    },
  ];

  return (
    <div name="Project" className="w-full pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-violet-600">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(
            ({ id, src, demo, code, projName, Description, TechStack }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg bg-violet-100 p-2"
              >
                <img
                  src={src}
                  alt="Youtube-Clone"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center mt-4">
                  <p className="text-1xl font-bold">{projName}</p>
                </div>

                <div className="flex items-center justify-center mt-1">
                  <p className="text-1xl text-center">{Description}</p>
                </div>

                <div className="flex items-center justify-center mt-2 ">
                  <p className=" text-center grid grid-cols-2 justify-center gap-2">
                    <span className="font-bold"> Tech-Stack:</span>
                    {TechStack.map((el) => (
                      <span class="text-black-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:text-black-400 border-2 border-purple-700 cursor-pointer">
                        {el.stack}
                      </span>
                    ))}
                    {/* <span class="text-black-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:text-black-400 border-2 border-purple-700">
                      Purple
                    </span> */}
                  </p>
                </div>

                <div className="flex items-center justify-center border-t-2 border-black mt-3">
                  <a href={demo} target="_blank" rel="noreferrer">
                    <button className="w1/2 px-4 py-1 m-4 duration-200 hover:scale-105 border-2 rounded-lg border-violet-400 hover:bg-violet-400">
                      Demo
                    </button>
                  </a>
                  <a href={code} target="_blank" rel="noreferrer">
                    <button className="w1/2 px-4 py-1 m-4 duration-200 hover:scale-105 border-2 rounded-lg border-violet-400 hover:bg-violet-400">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="mt-3 sm:mt-5 md:mt-7 mb-3 sm:mb-5 md:mb-7">
        <hr />
      </div>
    </div>
  );
};

export default Projects;
