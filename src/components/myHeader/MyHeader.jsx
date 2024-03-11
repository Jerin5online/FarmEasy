import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import "./MyHeader.css";
import { Link, useNavigate } from 'react-router-dom';


const MyHeader = ({profile}) => {
  const loginprofile = profile?true:false

  const navigate = useNavigate()

  const handleLogout = () =>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    //navigate to homepage
    navigate('/')
  }
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark" style={{ marginBottom: "60px" ,height:"80px"}}>
          <div class="container-fluid">
            <Nav.Link href="/" className='fs-3 text-white' style={{ fontFamily: "serif" }}> <i class="fa-solid fa-wheat-awn fa-bounce"></i> FARM-EASE</Nav.Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <Nav style={{ marginLeft: "12rem", gap: "2em" }}>

                <Link className='fs-6 text-warning' href="/about">ABOUT</Link>
                <Link className='fs-6  text-warning' href="/office">OFFICE</Link>
                <Link className='fs-6  text-warning' href="/crop">CROP</Link>
                <Link className='fs-6   text-warning' href="/disease">DISEASE</Link>
                <Link className='fs-6  text-warning' href="/feedback">FEEDBACK</Link>
                <Link className='fs-6  text-warning' href="/news">NEWS</Link>
                <Link className='fs-6  text-warning' href="/privacy">TERMS</Link>
               {loginprofile?<Link  className='fs-6  text-warning' href="/profile">LOGIN</Link>
 : <Link to={'/login'} onClick={handleLogout} className='fs-6  text-warning' href="/profile">LOGOUT</Link>}




              </Nav>
             
            </div>
          </div>
        </nav>
      </div>


    </>

  )
}

export default MyHeader