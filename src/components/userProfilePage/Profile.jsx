import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import React, { useState } from 'react';
import { registrationAPI } from "../../Services/AllAPI";
import Swal from "sweetalert2";


const Profile = ({ register }) => {

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData,setUserData] = useState({
    user_type :"",
    username:"",
    email:"",
    password:"",
    phone:"",
    address:"",
    location:"",
    
  })

  console.log(userData);
  const navigate = useNavigate();

  const registerform = register ? true : false

  // Functions for user authentication and registration
  const handleLogin = () => {
    // Implement login functionality
    // Set isLoggedIn state to true upon successful login
  };

  const handleRegistration = async (e) => {
    e.preventDefault()
    // Implement registration functionality
    const{user_type,username,email,password,phone,address,location} = userData

    if(!user_type || !username || !email || !password || !phone || !address || !location ){

      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    }else{
      const result = await registrationAPI(userData)
      console.log(result.data);
      if (result.status === 200) {
        Swal.fire({
          title: "Succesfully Registerd !",
          // text: `${result.data.username} is succesfully registerd`,
          icon: "success",
        });

        setUserData({
          user_type :"",
          username:"",
          email:"",
          password:"",
          phone:"",
          address:"",
          location:"",
        });

        //navigate to login
        navigate("/login");
      } else {
        alert(result.response.data);
      }
      
    }
     
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
      <div >
       
          {/* // User is not logged in
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

          // REGISTER */}

          <div>
            <section class="container w-25 p-4 bg-primary">
              <header>Registration Form</header>
              <form class="form" action="#">
                <div class="input-box">
                  <label>User Name</label>
                  <input value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} placeholder="Enter full name" type="text" />
                </div>
                <div class="column">
                  {registerform&& <div class="input-box">
                    <label>Email</label>
                    <input value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} placeholder="Enter Your Email" type="email" />
                  </div>}
                  { registerform&&
                    <div class="input-box">
                    <label>Phone Number</label>
                    <input value={userData.phone} onChange={(e)=>setUserData({...userData,phone:e.target.value})} placeholder="Enter phone number" type="telephone" />
                  </div>}

                </div>
                { registerform&&
                <div class="gender-box">
                  <label>User Type</label>
                  <div className="gender-option">
  <div className="gender">
    <input
      name="user_type"
      id="check-user"
      type="radio"
      value="User"
      checked={userData.user_type === "User"}
      onChange={(e) => setUserData({ ...userData, user_type: e.target.value })}
    />
    <label htmlFor="check-user">User</label>
  </div>
  <div className="gender">
    <input
      name="user_type"
      id="check-farmer"
      type="radio"
      value="Farmer"
      checked={userData.user_type === "Farmer"}
      onChange={(e) => setUserData({ ...userData, user_type: e.target.value })}
    />
    <label htmlFor="check-farmer">Farmer</label>
  </div>
</div>

                </div>}
               { registerform&& <div class="input-box address">
                  <label>Address</label>
                  <input value={userData.address} onChange={(e)=>setUserData({...userData,address:e.target.value})} placeholder="Enter street address" type="text" />
                  <div class="column">
                    <input value={userData.location} onChange={(e)=>setUserData({...userData,location:e.target.value})} placeholder="Enter Your Location" type="text" />
                  </div>
                  </div>}
                  
                  <div class="input-box">
                    <label>Password</label>
                    <input value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} placeholder="Enter Your password" type="password" />
                  </div>
                   
                
               
                
              </form>
             { registerform? <div className='d-flex align-items-center flex-column '>
                            <button onClick={handleRegistration} className='btn btn-warning rounded mt-4'>
                              Register
                            </button>
                            <p className='text-danger'>Already a member?<Link style={{ textDecoration: "none", color: "black" }} to={'/login'}>login here!</Link></p>

                          </div> :
                          <div className='d-flex align-items-center flex-column '>
                            <button  className='btn btn-warning rounded mt-4'>
                              login
                            </button>
                            <p className='text-danger'>New to the site? Click here to <Link style={{ textDecoration: "none", color: "black" }} to={'/profile'}>register</Link></p>
                          </div>}
            </section>

          



          </div>
       
      </div>


    </>
  )
}

export default Profile