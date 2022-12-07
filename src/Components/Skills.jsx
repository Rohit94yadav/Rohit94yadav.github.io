import React from "react";

import L_HTML5 from "../assets/img/skills/html-5.svg";
import L_CSS3 from "../assets/img/skills/css3.svg";

import L_REACT from "../assets/img/skills/react.svg";
import L_REDUX from "../assets/img/skills/redux.svg";
import L_REACT_ROUTER from "../assets/img/skills/react-router.svg";
import L_MATERIALUI from "../assets/img/skills/material-ui-1.svg";

import L_NODE_JS from "../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../assets/img/skills/express.svg";
import L_MONGODB from "../assets/img/skills/mongodb.svg";
import L_GIT from "../assets/img/skills/git-icon.svg";
import L_HEROKU from "../assets/img/skills/heroku.svg";
import L_VERCEL from "../assets/img/skills/vercel.svg";
import L_GITHUB_PAGES from "../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../assets/img/skills/javascript.svg";
import L_NETLIFY from "../assets/img/skills/netlify.svg";


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: L_HTML5,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: L_CSS3,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: L_JAVASCRIPT,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: L_REACT,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: L_NODE_JS,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: L_REACT_ROUTER,
      title: "React-Router-Dom",
      style: "shadow-white",
    },
    {
      id: 7,
      src: L_MATERIALUI,
      title: "Material-UI",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: L_GIT,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: L_HEROKU,
      title: "Heroku",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: L_EXPRESS,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: L_MONGODB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: L_REDUX,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: L_VERCEL,
      title: "Vercel",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: L_GITHUB_PAGES,
      title: "Github-Pages",
      style: "shadow-orange-500",
    },
    {
      id: 15,
      src: L_NETLIFY,
      title: "Netlify",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-grey experience"
      id="skills"
    >
      <div className="max-w-screen-lg mx-auto p-7 flex flex-col justify-center w-full h-full text-black font-bold">
        <div>
          <p className="text-4xl font-bold border-b-4 text-white border-gray-500 p-2 inline">
            SKILLS
          </p>
          <p className="py-9 text-2xl text-center text-white">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
