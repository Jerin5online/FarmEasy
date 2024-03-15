import React, { useEffect, useState } from 'react'
import MyHeader from '../myHeader/MyHeader'
import './ProfilePage.css'
import { addnewsAPI, adduserAPI } from '../../Services/AllAPI'
import Addproduct from '../Addproducts/Addproduct'

const ProfilePage = () => {

 const [userprodetails,setUserprodetails]= useState([])

const getUserDetails = async()=>{
  if (sessionStorage.getItem("token")) {
    const token = sessionStorage.getItem("token")
    const reqHeader = {

      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    
  }
  const result = await adduserAPI(reqHeader)
      console.log(result.data.data);
      setUserprodetails(result.data.data)
}
}
useEffect(() => {
  getUserDetails()
}, [])

  return (
   <>
   <MyHeader/>


   <div className='bgprofilepage d-flex align-items-center justify-content-center'>
   <div className="container rounded bg-white w-50">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5 ms-5">
            <img className="  rounded-circle ms-5 " width="190px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
            <span className="font-weight-bold"></span>
            <span className="text-black-50">edogaru@mail.com.my</span>
          </div>
        </div>
        
        <div className=" profilepage col-md-5 border-right mt-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Update Profile</h4>
            </div>
            <Addproduct/>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">User Name</label>
                <input type="text" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="labels">Email</label>
                <input type="text" className="form-control"   />
              </div>
             <div className="col-md-6">
                <label className="labels">Phone</label>
                <input type="text" className="form-control"   />
              </div> <div className="col-md-6">
                <label className="labels">Address</label>
                <input type="text" className="form-control"   />
              </div> <div className="col-md-6">
                <label className="labels">Location</label>
                <input type="text" className="form-control"   />
              </div>
              
            </div>
            
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">Save Profile</button>
              
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
