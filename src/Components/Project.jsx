import React from "react";
import { Card } from "./Card";
import kindmeal from "../assets/img/projects/kindmeal.jpeg";
import naukri from "../assets/img/projects/naukri.png";
import weatherapp from "../assets/img/projects/weatherapp.png";
import foodapp from "../assets/img/projects/foodapp.png";
import youtube from "../assets/img/projects/youtube.png";
import chargebee from "../assets/img/projects/chargebee.png";
import shine from "../assets/img/projects/shine.png";
import asos from "../assets/img/projects/asos.png";
import sugar from "../assets/img/projects/sugar.png";
import gearbest from "../assets/img/projects/gearbest.png";
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "sugarcosmetics.com Clone",
        desc: "sugarcosmetics.com a brand of choice for the women of today! And we're here to ensure you have a lot of fun with our makeup.",
        img: sugar,
        demoLink: "https://sugar-cosmetics-app.netlify.app/",
        codeLink: "https://github.com/sudiptadip/bent-stretch-1134-sugarcosmetics_clone",
        style: "shadow-yellow-500",
        techstack: [
          
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/html-5.svg",
          "/icons/react.svg",
          "/icons/react-router.svg",
          "/icons/mongodb.svg",
          "/icons/express.png",
       
        ],
      },
      {
        name: "asos.com Clone",
        desc: "asos.com is a British online fashion and cosmetic retailer website established in 2000.",
        img: asos,
        demoLink: "https://stirring-marzipan-5d4585.netlify.app/index.html",
        codeLink: "https://github.com/Sagar1079/asos_project",
        style: "shadow-yellow-500",
        techstack: [
          
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/html-5.svg",
       
        ],
      },
      {
        name: "gearbest.com Clone",
        desc: "Gearbest provides the most cost-efficient delivery service covering 200+ countries and regions, most of which enjoy free door-to-door delivery.",
        img: gearbest,
        demoLink: "https://gear-best-clone.netlify.app/",
        codeLink: "https://github.com/RakeshAhire/needless-marble-4977",
        style: "shadow-yellow-500",
        techstack: [
          
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/html-5.svg",
          "/icons/react.svg",
          "/icons/react-router.svg",
          "/icons/redux.svg",
       
        ],
      },
      {
        name: "shine.com Clone",
        desc: "Shine.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology.",
        img: shine,
        demoLink: "https://cloneshineapp.netlify.app/index.html",
        codeLink: "https://github.com/rituraj6/-slim-pen-3767",
        style: "shadow-yellow-500",
        techstack: [
         
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/html-5.svg",
         
        ],
      },
      {
        name: "kindmeal Clone",
        desc: "KindMeal.my is Malaysia's leading meat-free lifestyle platform, indulging you with delicious discounted vegetarian meals to save animals, health.",
        img: kindmeal,
        demoLink: "https://kind-meal.netlify.app/",
        codeLink: "https://github.com/Rohit94yadav/kind-meal/tree/main/kind-meal/kind-meal",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
        
          
       
          "/icons/javascript.svg",
          "/icons/react.svg",
          "/icons/material-ui-1.svg",
        ],
      },
      {
        name: "naukri.com Clone",
        desc: "naukri.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology.",
        img: naukri,
        demoLink: "https://clonenaukri.netlify.app/",
        codeLink: "https://github.com/Rohit94yadav/boring-gun-6988",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/react.svg",
          "/icons/material-ui-1.svg",
        ],
      },
      {
        name: "chargebee.com Clone",
        desc: "Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
        img: chargebee,
        demoLink: "https://chargebeeclone-94.netlify.app/",
        codeLink: "https://github.com/Rohit94yadav/wretched-room-300",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/react.svg",
          "/icons/material-ui-1.svg",
        ],
      },
      {
        name: "youtube.com Clone",
        desc: "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.",
        img: youtube,
        demoLink: "https://curious-dolphin-9bcaa7.netlify.app/",
        codeLink: "https://github.com/Rohit94yadav/unit-3-js201-class-work/tree/a88a6fff1816be984725e7c570eddfd5d7ede3ce/utube",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          
        ],
      },
      {
        name: "weather app",
        desc: "It is a mini weather app to check weather of any area.",
        img: weatherapp,
        demoLink: "https://majestic-longma-de397f.netlify.app",
        codeLink: "https://github.com/Rohit94yadav/unit-3-js201-class-work/blob/23e10883b2e498604952b858184403c699bc187e/weatherfetch.html",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          
        ],
      },
      {
        name: "recipe app",
        desc: "It is a mini recipe app to check recipe of your favourite food.",
        img: foodapp,
        demoLink: "https://newfoodapp.netlify.app/",
        codeLink: "https://github.com/Rohit94yadav/copy-of-masai-repo/tree/main/Rohit_fw19_0034-master/Rohit_fw19_0034-master/unit-3/sprint-4/day-1/assignments/foodapp",
        style: "shadow-yellow-500",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          
        ],
      },
      
    ],
  };
  return (
    <div className="project-container">
      <div id="projects" className="container width">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
        <div className="row">
          {project.data.map((elem, index) => {
            return <Card key={index} data={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};
