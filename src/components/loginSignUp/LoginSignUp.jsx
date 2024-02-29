import React from 'react'
import Login from './Login.jsx';
import Registration from './Registration.jsx';
import "./LoginSignUp.css"

const LoginSignUp = () => {
    const handleLogin = (username, password) => {
        // Handle login logic here (e.g., call API)
        console.log('Login with:', username, password);
      };
    
      const handleRegistration = (username, email, password) => {
        // Handle registration logic here (e.g., call API)
        console.log('Register with:', username, email, password);
      };
  return (
    <div>
    <Login handleLogin={handleLogin} />
    <Registration handleRegistration={handleRegistration} />
  </div>  )
}

export default LoginSignUp