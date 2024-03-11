import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./Privacy.css"
import React, { useState } from 'react';


const Privacy = () => {
   // State variable to track whether the user has accepted the terms
   const [acceptedTerms, setAcceptedTerms] = useState(false);

   // Function to handle user acceptance of terms
   const handleAcceptTerms = () => {
     // Implement logic to store user acceptance (e.g., in local storage or backend)
     setAcceptedTerms(true);
   };
  return (
    <>
    <MyHeader/>
<div  className="container p-5">
      <h2>Terms of Service and Privacy Policy</h2>
      <p>Here you can find the terms of service and privacy policy for using the Farm Ease App.</p>
      {/* Include your terms of service and privacy policy text here */}
      <p>By using this app, you agree to abide by the terms of service and privacy policy outlined below.</p>
      
      {/* Acceptance mechanism */}
      {!acceptedTerms && (
        <div>
          <input type="checkbox" id="acceptTerms" />
          <label htmlFor="acceptTerms" className="ms-2">I have read and agree to the terms of service and privacy policy</label>
          <button className="p-1 rounded bg-info ms-2" onClick={handleAcceptTerms}>Accept</button>
        </div>
      )}
      {acceptedTerms && <p>Thank you for accepting the terms!</p>}
    </div>
    <Footer/>
    </>
  )
}

export default Privacy