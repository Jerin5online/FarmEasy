import React from 'react'
import "./Error.css";


const Error = () => {
  return (
<div>
      <h2>404 Error: Page Not Found</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <p>Here are some suggestions:</p>
      <ul>
        <li>Check the URL for typos.</li>
        <li>Go back to the <a href="/">Home Page</a>.</li>
        <li>Contact our <a href="/support">Support Team</a> for assistance.</li>
      </ul>
    </div>
  )
}

export default Error