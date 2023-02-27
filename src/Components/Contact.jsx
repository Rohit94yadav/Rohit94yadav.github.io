import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import Contact2 from "./co ntact2";
const Contact = () => {
  return (
    <div className="contact-container">
      <Container id="contact">
        <Contact2/>
        <Row>
          <Col>
            <h2 style={{marginTop:"20px"}}>Get In Touch</h2>
            <h5>
              Liked my work? Want to get in touch? <br />
              You can reach out to me at-
            </h5>
           
            <br />
            <h5>
              <a href="rohit94yadav@gmail.com" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-envelope"></i>
                </span>
                <span>rohit94yadav@gmail.com</span>
              </a>
            </h5>

            <h5>
              <a href="tel: +91 7082382325" className="contact-me">
                <span>
                  {" "}
                  <i className="fa fa-phone"></i>
                </span>
                <span>+91 7082382325</span>
              </a>
            </h5>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
