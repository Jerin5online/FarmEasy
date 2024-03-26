import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

  <>
  <div className="container-fluid bg-dark text-white mt-auto px-sm-3 px-md-5">
            <div className="row pt-5">
                <div className="col-lg-7 col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h3 className="text-info mb-4">Get In Touch</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New York, USA</p>
                            <p><i className="fa fa-phone-alt mr-2"></i> +012 345 67890</p>
                            <p><i className="fa fa-envelope mr-2"></i> info@example.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-outline-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social mr-2 ms-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social mr-2 ms-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social ms-2" href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <h3 className="text-info mb-4">Quick Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a href="/" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                <a href="/office" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Office</a>
                                <a href="/feedback" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                                <a href="/profile" className="text-white mb-2"><i className="fa fa-angle-right mr-2"></i>Registration</a>
                                <a href="/news" className="text-white"><i className="fa fa-angle-right mr-2"></i>News</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 mb-5">
                    <h3 className="text-info mb-4">Newsletter</h3>
                    <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                    <div className="w-100">
                        <div className="input-group">
                            <input type="text" className="form-control border-light" style={{padding:"30px"}} placeholder="Your Email Address"/>
                            <div className="input-group-append">
                                <button className="btn btn-primary ms-2 p-3">Sign Up</button>
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