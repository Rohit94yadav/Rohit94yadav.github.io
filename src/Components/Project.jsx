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
import "./Project.css";
export const Projects = () => {
  const project = {
    data: [
      {
        name: "asos.com Clone",
        desc: "asos.com is a British online fashion and cosmetic retailer website established in 2000.",
        img: asos,
        demoLink: "https://stirring-marzipan-5d4585.netlify.app/index.html",
        codeLink: "https://github.com/Sagar1079/asos_project",
        techstack: [
          
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          "/icons/html-5.svg",
       
        ],
      },
      {
        name: "shine.com Clone",
        desc: "Shine.com connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings through an advanced 2-way matching technology.",
        img: shine,
        demoLink: "https://cloneshineapp.netlify.app/index.html",
        codeLink: "https://github.com/rituraj6/-slim-pen-3767",
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
        demoLink: "http://127.0.0.1:5502/youtube%202/index.html",
        codeLink: "https://github.com/masai-course/Rohit_fw19_0034/tree/master/unit-3/sprint-3/day-1/assignments/youtube",
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
        codeLink: "https://github.com/masai-course/Rohit_fw19_0034/tree/master/unit-3/sprint-2/day-3/assignments/weather%20data%20with%20gps",
        techstack: [
          "/icons/html-5.svg",
          "/icons/css-3.svg",
          "/icons/javascript.svg",
          
        ],
      },
      {
        name: "reciepe app",
        desc: "It is a mini reciepe app to check reciepe of your favourite food.",
        img: foodapp,
        demoLink: "https://newfoodapp.netlify.app/",
        codeLink: "https://github.com/masai-course/Rohit_fw19_0034/tree/master/unit-3/sprint-4/day-1/assignments/foodapp",
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
