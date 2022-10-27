import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import "./githubStats.css";
const GithubStats = () => {
  return (
    <div className="contact-container">
      <Container >
        <Row>
          <Col>
          <h2 style={{marginTop:"30px"}}>Github Stats</h2>
            <img style={{width:"70%",marginTop:"30px"}} src="https://github-readme-stats.vercel.app/api?username=Rohit94yadav&theme=radical" alt="stats" />
          <h2 style={{marginTop:"30px"}}>Github Calender</h2>
          <div style={{width:"70%",margin:"auto",marginTop:"30px"}}>

          <GitHubCalendar username="Rohit94yadav" />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GithubStats;
