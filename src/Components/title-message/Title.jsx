import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

import styled from "styled-components";
export const Title = () => {
  const myRef = document.querySelector(".scrollable-div");
  const TitleMessage = styled.h1`
   
    
    color: mintcream;
    position: absolute;
    width: 100%;
    top: 22rem;
    padding:20px;
    z-index: 1;
    margin-top: -200px;
    text-align: center;
    .title-message-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <TitleMessage>
      <div className="title-message-container">
        <div style={{ height: "300px" }}>
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
