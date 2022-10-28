import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import "./About.css";
import profile from "../assets/img/profile/profile.jpg";
const About = () => {
  return (
    <div className="bgi mar-container about-container"  >
      <Container className="about-container bgi" id="about" >
        <Row>
          <Col>
            <h1>ABOUT ME</h1>
          </Col>
        </Row>
      </Container>
      <Container className="bgi" style={{width:"90%",margin:"auto"}}>
        <Row className="about-container">
          <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
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
    </div>
  );
};

export { About };
