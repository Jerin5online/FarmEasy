import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./MyHeader.css";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';


const MyHeader = () => {
  return (
    <>    <MyHeader/>
    <div>
      {/* <Navbar expand="lg" className="bg-body-tertiary w-100" style={{marginTop:"-5em"}}>
      <Container>
        <Navbar.Brand href="/"><img
              alt="logo"
              src="src/assets/logo.png"
              width="100%"
              height="50"
              className="d-inline-block align-top"
            />{' '}FARM-EASY</Navbar.Brand>
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
            <Nav.Link href="/loginsignup">LOG IN</Nav.Link>


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark" style={{marginBottom:"60px"}}>
  <div class="container-fluid">
    <Nav.Link href="/" className='fs-3 text-white' style={{fontFamily:"serif"}}>FARM-EASY</Nav.Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
    <Nav style={{marginLeft:"15rem",gap:"5px"}}>

<Nav.Link  className='fs-6 text-warning' href="/about">ABOUT</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/office">OFFICE</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/crop">CROP</Nav.Link>
<Nav.Link className='fs-6   text-warning' href="/disease">DISEASE</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/feedback">FEEDBACK</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/news">NEWS</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/privacy">TERMS</Nav.Link>
<Nav.Link className='fs-6  text-warning' href="/profile">LOGIN</Nav.Link>



</Nav>
      {/* <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
    <Footer/>
    </>

  )
}

export default MyHeader