import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import React, {useState } from 'react';
import { loginAPI, registrationAPI } from "../../Services/AllAPI";
import Swal from "sweetalert2";


const Profile = ({ register }) => {

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    user_type: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    location: "",

  })

  console.log(userData);
  const navigate = useNavigate();

  const registerform = register ? true : false



  //REGISTRATION

  const handleRegistration = async (e) => {
    e.preventDefault()
    // Implement registration functionality
    const { user_type, username, email, password, phone, address, location } = userData;

    if (!user_type || !username || !email || !password || !phone || !address || !location) {

      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    }
    else {
      const result = await registrationAPI(userData)
      console.log(result.data);
      if (result.status === 201) {
        Swal.fire({
          title: "Succesfully Registerd !",
          text: "Succesfully registerd",
          icon: "success",
        });
        setTimeout(() => {

          //navigate to login
          navigate("/login");
        }, 2000);

        setUserData({
          user_type: "",
          username: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          location: "",
        });

      } else {
        alert(result.data);
      }

    }


    // Set isLoggedIn state to true upon successful registration
  };

  // Functions for user authentication and registration
  const handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = userData;
    if (!username || !password) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });
    } else {

      //API call
      const result = await loginAPI(userData)
      console.log(result);

      if (result.status == 200)
        if (username === "Farmadmin" && password === "123") {
          Swal.fire({
            title: "Admin Succesfully Login !",
            icon: "success",
          });


          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem('admin',result.data.user.id)

          setTimeout(() => {
            navigate('/adminhome')
          }, 2000);

        }
        else {
          {
            Swal.fire({
              title: "Succesfully Login !",
              icon: "success",
            });
            sessionStorage.setItem("token", result.data.token)
            sessionStorage.setItem('user',JSON.stringify(result.data.user))
            sessionStorage.setItem("user_type",result.data.user.user_type)

            setUserData({
              username: "",
              password: ""
            });
            navigate('/')

          }
        }

      else {
        Swal.fire({
          title: "Invalid Username or Password",
          icon: "error",
        });
      }

    }
  };

  return (
    <>
<div className="bgreg d-flex align-items-center justify-content-center">
        <div>
          
          <section class="containers p-4 " style={{border:"rounded",}}>
            {registerform ?
              <header style={{textAlign:"center" , justifyContent:"center"}}>Registration Form 
              </header>
              :
              <header style={{textAlign:"center" , justifyContent:"center"}}>Login Form</header>
            }

              <Link style={{textAlign:"center" , justifyContent:"center" , textDecoration:"none" ,color:"black"}} to={'/'}><h6>/back</h6></Link>

            <form class="form" action="#">
              <div class="input-box">
                <label>User Name</label>
                <input value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })} placeholder="Enter full name" type="text" />
              </div>
              <div class="column">
                {registerform && <div class="input-box">
                  <label >Email</label>
                  <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder="Enter Your Email" type="email" />
                </div>}
                {registerform &&
                  <div class="input-box">
                    <label>Phone Number</label>
                    <input value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder="Enter phone number" type="telephone" />
                  </div>}

              </div>
              {registerform &&
                <div class="gender-box">
                  <label >User Type</label>
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
                      <label htmlFor="check-user"  style={{color:"black"}}>User</label> 
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
                      <label htmlFor="check-farmer"  style={{color:"black"}}>Farmer</label>
                    </div>
                  </div>

                </div>}
              {registerform && <div class="input-box address">
                <label  style={{color:"black"}}>Address</label>
                <input value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} placeholder="Enter street address" type="text" />
                <div class="column">
                  <input value={userData.location} onChange={(e) => setUserData({ ...userData, location: e.target.value })} placeholder="Enter Your Location" type="text" />
                </div>
              </div>}

              <div class="input-box">
                <label  style={{color:"black"}}>Password</label>
                <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} placeholder="Enter Your password" type="password" />
              </div>
            </form>
            {registerform ? <div className='d-flex align-items-center flex-column '>
              <button onClick={handleRegistration} className='btn btn-warning rounded mt-4'>
                Register
              </button>
              <p className='text-white mt-2'>Already a member?<Link style={{ textDecoration: "none", color: "black" }} to={'/login'}> Login here!</Link></p>

            </div> :
              <div className='d-flex align-items-center flex-column '>
                <button onClick={handleLogin} className='btn btn-warning rounded mt-4'>
                  login
                </button>
                <p className='text-white mt-2'>New to the site? Click here to <Link style={{ textDecoration: "none", color: "black" }} to={'/profile'}> Register</Link></p>
              </div>}
          </section>
        </div>
      </div>
    </>
  )
}

export default Profile