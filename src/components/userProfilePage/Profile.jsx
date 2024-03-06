import "./Profile.css";
import React, { useState } from 'react';


const Profile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Functions for user authentication and registration
  const handleLogin = () => {
    // Implement login functionality
    // Set isLoggedIn state to true upon successful login
  };

  const handleRegistration = () => {
    // Implement registration functionality
    // Set isLoggedIn state to true upon successful registration
  };

  // Function for logging out
  const handleLogout = () => {
    // Implement logout functionality
    // Set isLoggedIn state to false upon successful logout
  };

  document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signup-button'),
      loginButton = document.getElementById('login-button'),
      userForms = document.getElementById('user_options-forms')

    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight')
      userForms.classList.add('bounceLeft')
    }, false)

    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft')
      userForms.classList.add('bounceRight')
    }, false)
  })
  return (
    <>
      <div className="">
        {isLoggedIn ? (
          // User is logged in
          <div>
            <h2>Welcome, {username}!</h2>
            <button onClick={handleLogout}>Logout</button>
            {/* User profile management section */}
            <h3>User Profile Management</h3>
            <p>Email: {email}</p>
            {/* Add more profile management features as needed */}

            {/* Preferences settings section */}
            <h3>Preferences Settings</h3>
            {/* Implement preferences settings */}
          </div>
        ) : (
          // User is not logged in
          // <div>
          //   <h2>Login</h2>
          //   <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          //   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          //   <button onClick={handleLogin}>Login</button>

          //   <h2>Register</h2>
          //   <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          //   <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          //   <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          //   <button onClick={handleRegistration}>Register</button>
          // </div>

          // REGISTER

          <div className="conatiner">
            <div class="wrapper">
              <form action="">
                <p class="form-login">Login</p>
                <div class="input-box">
                  <input required="" placeholder="Username" type="text" />
                </div>
                <div class="input-box">
                  <input required="" placeholder="Password" type="password" />
                </div>
                <div class="remember-forgot">
                </div>
                <button class="btn" type="submit">Login</button>
                <div class="register-link">
                  <p>Dont have an account? <a href="#">Register</a></p>
                </div>
              </form>
            </div>



          </div>
        )}
      </div>


    </>
  )
}

export default Profile