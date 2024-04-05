
import React, { useEffect, useState } from 'react'
import MyHeader from '../myHeader/MyHeader'
import './ProfilePage.css'
import { EdituserprofileAPI, addnewsAPI, adduserAPI } from '../../Services/AllAPI'
import Addproduct from '../Addproducts/Addproduct'

import Swal from 'sweetalert2'
import axios from 'axios'

const userString = sessionStorage.getItem("user")
const user = JSON.parse(userString)
console.log(user);
const token = sessionStorage.getItem('token')


const ProfilePage = () => {
  const [userprofile, setUserprofile] = useState({
    user_type: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    location: "",
  })

  const [preview, setPreview] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)
  const [isUser, setIsUSer] = useState()


  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"))

    setUserprofile({ ...userprofile, username: user.username, email: user.email, address: user.address, location: user.location, phone: user.phone, user_type: user.user_type })

  }, [isUpdate])

  const handleProfileUpdate = async () => {
    const { user_type, username, email, phone, address, location } = userprofile
    if (!user_type || !username || !email || !phone || !address || !location) {
      Swal.fire({
        title: "Incomplete Form !",
        text: "Please fill in the form",
        icon: "error",
      });


    }
    else {
      const reqBody = new FormData()
      reqBody.append("user_type", user_type)
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("phone", phone)
      reqBody.append("address", address)
      reqBody.append("location", location)

      try {
        const result = await axios.put(`http://127.0.0.1:8000//farmease/profile/${user.id}/`, reqBody, {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        if (result.status === 200) {
          console.log(result);
          Swal.fire({
            title: "Profile Update Successfully",
            text: "Please fill in the form",
            icon: "success",
          });    // sessionStorage.setItem('user',JSON.stringify(result.data))

        }
      } catch (error) {
        console.log(error);
      }

    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("user_type") === "User") {
      setIsUSer(true)
    }
    else {
      setIsUSer(false)
    }
  }, [])


  return (
    <>
      <MyHeader />


      <div className='bgprofilepage d-flex align-items-center justify-content-center'>
        <div className="container rounded bg-white w-50">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5 ms-5">
                <img className="  rounded-circle ms-5 " width="200px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
              </div>
            </div>

            <div className=" profilepage col-md-5 border-right mt-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right"><span className='fw-bold'>Profile</span> /Update Profile</h4>
                </div>
                {
                  isUser ? '' : <Addproduct />
                }
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">User Name</label>
                    <input value={userprofile.username} onChange={(e) => setUserprofile({ ...userprofile, username: e.target.value })} type="text" className="form-control" placeholder="" />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Email</label>
                    <input value={userprofile.email} onChange={(e) => setUserprofile({ ...userprofile, email: e.target.value })} type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Phone</label>
                    <input value={userprofile.phone} onChange={(e) => setUserprofile({ ...userprofile, phone: e.target.value })} type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Address</label>
                    <input value={userprofile.address} onChange={(e) => setUserprofile({ ...userprofile, address: e.target.value })} type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="labels">Location</label>
                    <input value={userprofile.location} onChange={(e) => setUserprofile({ ...userprofile, location: e.target.value })} type="text" className="form-control" />
                  </div>

                  <p>user type : {userprofile.user_type}</p>

                </div>

                <div className="mt-5 text-center">
                  <button onClick={handleProfileUpdate} className="btn btn-primary profile-button" type="button">Save Profile</button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default ProfilePage