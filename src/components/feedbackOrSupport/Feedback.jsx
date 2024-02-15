import "./Feedback.css";
import React, { useState } from 'react';


const Feedback = () => {
  // State variables to store form data
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement logic to handle form submission (e.g., send feedback to backend)
    console.log('Feedback:', feedback);
    console.log('Email:', email);
    // Reset form fields after submission
    setFeedback('');
    setEmail('');
  };
  return (
    <div>
      <h2>Feedback/Support</h2>
      <p>Provide your feedback or seek support by filling out the form below:</p>
      
      {/* Feedback/support form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="feedback">Feedback/Support:</label>
          <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      
      {/* Contact information for technical support or inquiries */}
      <div>
        <h3>Contact Information</h3>
        <p>For technical support or inquiries, please contact us:</p>
        <ul>
          <li>Email: support@farmeaseapp.com</li>
          <li>Phone: 123-456-7890</li>
          {/* Add more contact information as needed */}
        </ul>
      </div>
    </div>
  )
}

export default Feedback