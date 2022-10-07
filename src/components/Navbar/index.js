import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/conecta-vertical.png"; //feed
// import  {BsPersonFill}  from "react-icons/bs"; //profile
import style from "./style.module.css";
import { BsPersonFill } from "react-icons/bs"; //profile
import { BsFillArrowRightCircleFill } from "react-icons/bs"; //profile

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";

function Navbarr() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              style={{ width: "60px", padding: "4px", marginLeft: "15px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/feed">Feed</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                Fechar Sessão&nbsp;&nbsp;
                <BsFillArrowRightCircleFill />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr;
