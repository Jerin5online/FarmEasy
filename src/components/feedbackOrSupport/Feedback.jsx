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
    // <div>
    //   <h2>Feedback/Support</h2>
    //   <p>
    //     Provide your feedback or seek support by filling out the form below:
    //   </p>

    //   {/* Feedback/support form */}
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="feedback">Feedback/Support:</label>
    //       <textarea
    //         id="feedback"
    //         value={feedback}
    //         onChange={(e) => setFeedback(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email:</label> 
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>

    //   {/* Contact information for technical support or inquiries */}
    //   <div>
    //     <h3>Contact Information</h3>
    //     <p>For technical support or inquiries, please contact us:</p>
    //     <ul>
    //       <li>Email: support@farmeaseapp.com</li>
    //       <li>Phone: 123-456-7890</li>
    //       {/* Add more contact information as needed */}
    //     </ul>
    //   </div>
    // </div>
    <>
    <MyHeader/>
    <form>
        <div class="container">
            <div class="mx-auto text-center mb-5" style={{maxWidth:"500px"}}>
                <h1 class="display-5">Please Feel Free To Contact Us</h1>
            </div>
            <div class="row g-0">
                <div class="col-lg-7">
                    <div class="bg-primary h-100 p-5">
                        <form onSubmit={handleSubmit}>
                            <div class="row g-3">
                               
                                <div class="col-12">
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height:"55px"}}/>
                                </div>
                                <div class="col-12">
                                    <textarea   id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required class="form-control bg-light border-0 px-4 py-3" rows="2" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-secondary w-100 py-3" type="submit">Send Feedback</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="bg-secondary h-100 p-5">
                        <h2 class="text-white mb-4">Get In Touch</h2>
                        <div class="d-flex mb-4">
                           
                        </div>
                        <div class="d-flex mb-4">
                            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{height:"60px",width:"60px"}}>
                                <i class="fa-solid fa-envelope fs-4 text-light"></i>                            </div>
                            <div class="ps-3">
                                <h5 class="text-white">Email Us</h5>
                                <span class="text-white">info@example.com</span>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{height:"60px",width:"60px"}}>
                            <i class="fa-solid fa-phone fs-4 text-light"></i>
                            </div>
                            <div class="ps-3">
                                <h5 class="text-white">Call Us</h5>
                                <span class="text-white">+012 345 6789</span>
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
