import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

  //   <MDBFooter bgColor='light' className='text-center text-lg-left mt-auto'>
  //   <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '1rem', position: 'fixed', bottom: '0', width: '100%' }}>
  //     &copy; {new Date().getFullYear()} Copyright:{' '}
  //     <a className='text-dark' href='http://localhost:5173/'>
  //       FARM-EASY-APP.COM
  //     </a>
  //   </div>
  // </MDBFooter>
  <>
  <div class="container-fluid bg-dark text-white mt-5  px-sm-3 px-md-5">
        <div class="row pt-5">
            <div class="col-lg-7 col-md-6">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h3 class="text-info mb-4">Get In Touch</h3>
                        <p><i class="fa fa-map-marker-alt mr-2"></i> 123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt mr-2"></i> +012 345 67890</p>
                        <p><i class="fa fa-envelope mr-2"></i> info@example.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mr-2 ms-2" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social mr-2 ms-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-social ms-2" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h3 class="text-info mb-4">Quick Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <Link to={'/'} class="text-white mb-2" ><i class="fa fa-angle-right mr-2"></i>Home</Link>
                            <Link to={'/office'} class="text-white mb-2 "><i class="fa fa-angle-right mr-2"></i>Office</Link>
                            <Link to={'/feedback'} class="text-white mb-2 " href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</Link>
                            <Link to={'/profile'} class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Registration</Link>
                            <Link to={'/news'} class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>News</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6 mb-5">
                <h3 class="text-info mb-4">Newsletter</h3>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style={{padding:"30px"}} placeholder="Your Email Address"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary ms-2 p-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  
  
  </>
  )
}

export default Footer