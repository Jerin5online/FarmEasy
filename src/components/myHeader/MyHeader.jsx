import React from 'react'
import "./MyHeader.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const MyHeader = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">FARM-EASY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/office">OFFICE</Nav.Link>
            <Nav.Link href="/crop">CROP</Nav.Link>
            <Nav.Link href="/disease">DISEASE</Nav.Link>
            <Nav.Link href="/feedback">FEEDBACK</Nav.Link>
            <Nav.Link href="/news">NEWS</Nav.Link>
            <Nav.Link href="/privacy">TERMS</Nav.Link>
            <Nav.Link href="/profile">PROFILE</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyHeader