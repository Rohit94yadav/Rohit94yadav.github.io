import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Button } from "react-bootstrap";

export const Navbaar = () => {
  return (
    <div className="navbar-container">
       
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        id="navbar"
        className="animate-navbar nav-theme justify-content-between"
      >
        <Container>
          <Navbar.Brand>
            {/* Resume */}
            <img
                
                src="https://images.assetsdelivery.com/compings_v2/pixbold/pixbold2202/pixbold220200202.jpg"
                width="48px"
                className="img-fluid mx-2 d-inline-block"
                alt=""
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav style={{fontWeight:"500",marginRight:"20px"}}>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link eventKey={2} href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={4} href="#contact">
                Contact
              </Nav.Link>
              
            </Nav>
            <span></span>
            <span></span>
            <span></span>
            <Button 
              className="btn btn-info"
              variant="Info"
              href= "/files/Rohit-Yadav-resume.pdf"
              target="_blank"
            >
              Resume
              <i style={{marginLeft:"4px"}} className="fa fa-download"></i>
            </Button>
            
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </div>
  );
};
