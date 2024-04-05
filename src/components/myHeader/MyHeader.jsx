import React, { useContext, useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import "./MyHeader.css";
import { Link, useNavigate } from 'react-router-dom';


const MyHeader = () => {


  const [islogin, setIsLogin] = useState(false)

  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("farmer"); // Remove "farmer" item as well
    // Navigate to homepage
    navigate('/');
  }
  

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    }
  }, [])

  

  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark" style={{  height: "80px" }}>
          <div class="container-fluid">
            <Nav.Link href="/" className='header fs-3 text-white'>FARM-EASE</Nav.Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <Nav style={{ marginLeft: "22rem", gap: "2em" }}>
                 
                <Link className='bmg fs-6 text-warning' to={'/about'}>CROPS</Link>
                <Link className='bmg fs-6  text-warning' to={'/office'}>OFFICE</Link>
                <Link className='bmg fs-6  text-warning' to={'/news'}>NEWS</Link>
                <Link className='bmg fs-6  text-warning' to={'/feedback'}>FEEDBACK</Link>
                <Link className='bmg fs-6  text-warning' to={'/products'}>PRODUCTS</Link>
                <Link className='bmg fs-6  text-warning' to={'/imagehealth'}>HEALTH ASSESMENT</Link>
                <Link className='bmg fs-6  text-warning' to={'/addtocart'}>CART</Link>





                {islogin ? (
                  <>
                    <Link className='fs-6 text-warning' to={'/profilepage'}>
                      PROFILE
                    </Link>
                    <Link to={'/login'} onClick={handleLogout} className='fs-6 text-warning'>
                      LOGOUT
                    </Link>

                  </>
                ) : (
                  <Link className='fs-6 text-warning' to={'/login'}>
                    LOGIN
                  </Link>
                )}

              </Nav>

            </div>
          </div>
        </nav>
      </div>


    </>

  )
}

export default MyHeader