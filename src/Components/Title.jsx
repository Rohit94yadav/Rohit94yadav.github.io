import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import {  Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./About.css";
import profile from "../assets/img/profile/profile.jpg";


import styled from "styled-components";
export const Title = () => {
  const myRef = document.querySelector(".scrollable-div");
  const TitleMessage = styled.h1`
   
    display:flex;
    color: black;
   margin:auto;
   justify-content:space-around;
   align-items:center;
    margin-top:90px;
    top: 22rem;
    height:400px;
    padding:50px;
    z-index: 1;
   background-color:black;
    text-align: center;
    .title-message-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
    }
  `;
  return (
    <TitleMessage id="home">
        <Col>
            <Image src={profile} rounded className="profile-image" />
          </Col>
      <div className="title-message-container">
        <div >
          <div className="scrollable-div">
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "mintcream",
                fontSize: "4vw",
              }}
              startDelay={100}
              cursorColor="mintcream"
              text=" Hi, I am"
              typeSpeed={100}
              scrollArea={myRef}
              hideCursorAfterText="true"
              
            />
            
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "mintcream",
                fontSize: "5vw",
              }}
              startDelay={1000}
              cursorColor="blue"
              text="Rohit Yadav"
              typeSpeed={100}
              scrollArea={myRef}
              hideCursorAfterText="true"
            />
          </div>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "mintcream",
              fontWeight: 900,
              fontSize: "4vw",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={["Web Developer", "Full-Stack Web Developer"]}
            multiTextDelay={1000}
            typeSpeed={30}
            loop="true"
            autoStart="true"
          />
        </div>

        
      </div>
    </TitleMessage>
  );
};
