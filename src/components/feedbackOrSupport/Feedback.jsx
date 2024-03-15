import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./Feedback.css";
import React, { useState } from "react";

const Feedback = () => {
  // State variables to store form data
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to handle form submission (e.g., send feedback to backend)
    console.log("Feedback:", feedback);
    console.log("Email:", email);
    // Reset form fields after submission
    setFeedback("");
    setEmail("");
  };
  return (
    <>
    <MyHeader/>
    <form>
        <div clasNames="container">
            <div className="mx-auto text-center mb-5" style={{maxWidth:"500px"}}>
                <h1 clasNames="display-5">Please Feel Free To Contact Us</h1>
            </div>
            <div className="row g-0">
                <div className="col-lg-7">
                    <div className="bg-primary h-100 p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                               
                                <div className="col-12">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:"55px"}}/>
                                </div>
                                <div className="col-12">
                                    <textarea   id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required className="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Send Feedback</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="bg-secondary h-100 p-5">
                        <h2 className="text-white mb-4">Get In Touch</h2>
                        <div className="d-flex mb-4">
                           
                        </div>
                        <div className="d-flex mb-4">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{height:"60px",width:"60px"}}>
                                <i className="fa-solid fa-envelope fs-4 text-light"></i>                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Email Us</h5>
                                <span className="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{height:"60px",width:"60px"}}>
                            <i className="fa-solid fa-phone fs-4 text-light"></i>
                            </div>
                            <div className="ps-3">
                                <h5 className="text-white">Call Us</h5>
                                <span className="text-white">+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
   <Footer/>
    </>
  );
};

export default Feedback;
