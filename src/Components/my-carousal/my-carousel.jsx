import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./my-carousel.style.css";
import kindmeal from "../../assets/img/projects/kindmeal.jpeg";
import naukri from "../../assets/img/projects/naukri.png";
import weatherapp from "../../assets/img/projects/weatherapp.png";
import foodapp from "../../assets/img/projects/foodapp.png";
import youtube from "../../assets/img/projects/youtube.png";
import chargebee from "../../assets/img/projects/chargebee.png";
import shine from "../../assets/img/projects/shine.png";
import asos from "../../assets/img/projects/asos.png";

import { Title } from "../title-message/Title";

const MyCarousal = () => {
  return (
    <div id="home" style={{display:"flex",marginTop:"5%",padding:"40px",backgroundColor:"#252f3c"}}>
      <Carousel controls={false} indicators interval={2000} pause={false} style={{width:"530px"}}>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={kindmeal}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={naukri}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={weatherapp}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={foodapp}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={youtube}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={chargebee}
            alt="Third slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={shine}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={asos}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-30 custom-img"
            src={weatherapp}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
     <Title/>
    </div>
  );
};

export { MyCarousal };
