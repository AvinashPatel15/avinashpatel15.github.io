import React from "react";

import vscode from "../Assets/vscode.png";
import bootstrap from "../Assets/bootstrap.png";
import chakra from "../Assets/chakra.png";
import css from "../Assets/css.png";
import expressjs from "../Assets/expressjs.png";
import github from "../Assets/github.png";
import html from "../Assets/html.png";
import javascript from "../Assets/javascript.png";
import materialui from "../Assets/materialui.png";
import mongodb from "../Assets/mongodb.png";
import Netlify from "../Assets/Netlify.png";
import nextjs from "../Assets/nextjs.png";
import nuxtjs from "../Assets/nuxtjs.png";
import nodejs from "../Assets/nodejs.png";
import postman from "../Assets/postman.png";
import react from "../Assets/react.png";
import redux from "../Assets/redux.png";
import tailwind from "../Assets/tailwind.png";
import Vercel from "../Assets/Vercel.png";
import GitHubCalendar from "react-github-calendar";

const Skills = () => {
  const proskill = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 border-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 border-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500 border-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React JS",
      style: "shadow-cyan-200 border-cyan-200",
    },
    {
      id: 5,
      src: redux,
      title: "Redux",
      style: "shadow-violet-500 border-violet-500",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next.JS",
      style: "shadow-black border-black",
    },
    {
      id: 7,
      src: nuxtjs,
      title: "Nuxt.JS",
      style: "shadow-green-500 border-green-500",
    },
    {
      id: 8,
      src: chakra,
      title: "Chakra-UI",
      style: "shadow-black border-black",
    },
    {
      id: 9,
      src: materialui,
      title: "Material-UI",
      style: "shadow-blue-500 border-blue-500",
    },
    {
      id: 10,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-600 border-violet-600",
    },
    {
      id: 11,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500 border-cyan-500",
    },
    {
      id: 12,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-600 border-green-600",
    },
    {
      id: 13,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-yellow-800 border-yellow-800",
    },
    {
      id: 14,
      src: expressjs,
      title: "Express JS",
      style: "shadow-black border-black",
    },
  ];

  const tools = [
    {
      id: 1,
      src: vscode,
      title: "VS Code",
      style: "shadow-blue-400 border-blue-400",
    },
    {
      id: 2,
      src: github,
      title: "Github",
      style: "shadow-black border-black",
    },
    {
      id: 3,
      src: Netlify,
      title: "Netlify",
      style: "shadow-teal-500 border-teal-500",
    },
    {
      id: 4,
      src: Vercel,
      title: "Vercel",
      style: "shadow-blue-400 border-blue-400",
    },
    {
      id: 5,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500 border-orange-500",
    },
  ];

  return (
    <div name="Skills" className="w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 text-violet-600 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div>
          <p className="text-4xl font-bold text-center mt-10">
            Professional <span className="text-violet-600">Skillset</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {proskill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 bg-violet-100 border-2 border-orange-500 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-4xl font-bold text-center mt-10">
            Tools I <span className="text-violet-600">Use</span>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 bg-violet-100 border-2 rounded-lg ${style}`}
            >
              <img src={src} alt="html" className="w-20 mx-auto" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-4xl font-bold text-center mt-10">
            GitHub <span className="text-violet-600">Calendar</span>
          </p>
        </div>

        <div className="w-full mt-5">
          <GitHubCalendar
            username="AvinashPatel15"
            blockSize={20}
            blockMargin={5}
            fontSize={18}
          />
        </div>

        <div>
          <p className="text-4xl font-bold text-center mt-10">
            GitHub <span className="text-violet-600">Stats</span>
          </p>
        </div>

        <div className="w-full md:grid md:grid-cols-2 md:auto-rows-auto gap-x-5 gap-y-5 mt-5">
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=avinashpatel15&theme=radical"
              alt="Github Streak"
            />
          </div>

          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=avinashpatel15&theme=radical&count_private=true&show_icons=true"
              alt="github stats"
            />
          </div>

          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=avinashpatel15&theme=radical"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-3 sm:mt-5 md:mt-7 mb-3 sm:mb-5 md:mb-7">
        <hr />
      </div>
    </div>
  );
};

export default Skills;
