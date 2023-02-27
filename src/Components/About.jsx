import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
import profile from "../assets/img/profile/profile.jpg";
import { MyCarousal } from "./my-carousal/my-carousel";
const About = () => {
  return (
    <div className="bgi mar-container about-container"  >
      <Container className="about-container bgi" id="about" >
        <Row>
          <Col>
            <h1 className="aboutme" >ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi" style={{width:"90%",margin:"auto"}}>
        <Row className="about-container">
          <MyCarousal/>
          <Col>
            <div className="aobut-name">
              <h6>Hi there! I am </h6>
              <h3> Rohit Yadav</h3>
              <br />
              <p>
               <li> I am currently learning full stack web development at Masai
                School. I am passionate about solving real-world problems and
                actively looking for opportunities in the field of web
                development and software engineering.</li>
                <li>I was always interested in web development but did not have correct guidance but when i got to know about Masai School 
                  I was overwhelmed and immediately took admission.
                </li>
                <li>I'm a passionate Developer, with strong administrative and communication skills,
                   good attention to detail and the ability to write efficient code using MERN Stack.</li>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "black" }}>
        <div className="wrapper">
          <a
            href="https://twitter.com/Rohit94yadav"
            className="icon twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-yadav-18b716199/"
            className="icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Rohit94yadav"
            className="icon github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export { About };
