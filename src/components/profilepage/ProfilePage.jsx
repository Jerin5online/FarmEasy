import React, { useEffect, useState } from 'react'
import MyHeader from '../myHeader/MyHeader'
import './ProfilePage.css'
import { EdituserprofileAPI, addnewsAPI, adduserAPI } from '../../Services/AllAPI'
import Addproduct from '../Addproducts/Addproduct'

import Swal from 'sweetalert2'
// 
const ProfilePage = () => {
  const[userprofile,setUserprofile] = useState({
          user_type: "",
          username: "",
          email: "",
          phone: "",
          address: "",
          location: "",
  })

  const[preview,setPreview]=useState("")
  const [isUpdate,setIsUpdate] = useState(false)


useEffect(()=>{
const user1 = JSON.parse(sessionStorage.getItem("user"))

setUserprofile({...userprofile,username:user1.username,email:user1.email,address:user1.address,location:user1.location,phone:user1.phone,user_type:user1.user_type})

},[isUpdate])

const handleProfileUpdate = async()=>{
  const{user_type,username,email,phone,address,location} = userprofile
  if(!user_type || !username || !email ||  !phone || !address || !location){
    Swal.fire({
      title: "Incomplete Form !",
      text: "Please fill in the form",
      icon: "error",
    });
  

}
else{
  const reqBody = new FormData()
  reqBody.append("user_type",user_type)
  reqBody.append("username",username)
  reqBody.append("email",email)
  reqBody.append("phone",phone)
  reqBody.append("address",address)
  reqBody.append("location",location)

const token = sessionStorage.getItem("token")
if(preview){
  const reqHeader = {
    "Authorization" :`Token ${token}`
   }
   const result = await EdituserprofileAPI(reqBody,reqHeader)
   console.log(result);
   if(result.status === 200){
    Swal.fire({
      title: "Profile Update Successfully",
      text: "Please fill in the form",
      icon: "success",
    });
    sessionStorage.setItem("user",JSON.stringify(result.data))
    setIsUpdate(true)
   
   }
   else{
console.log(result.response.data.user);

   }
}
else{
  const reqHeader = {
    "Content-Type": "application/json",
    "Authorization": `Token ${token}`,
  };
  const result = await EdituserprofileAPI(reqBody,reqHeader)
   console.log(result.data.user);
   if(result.status ===200)
   {
    Swal.fire({
      title: "Profile Update Successfully",
      text: "Please fill in the form",
      icon: "success",
    });
    sessionStorage.setItem("user",JSON.stringify(result.data))
    setIsUpdate(true)

   }
   else{
console.log(result.response.data.user);

   }
}

}
}
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
                <input  value={userprofile.username} onChange={(e) => setUserprofile({ ...userprofile, username: e.target.value })} type="text" className="form-control" placeholder=""/>
              </div>
              <div className="col-md-6">
                <label className="labels">Email</label>
                <input  value={userprofile.email} onChange={(e) => setUserprofile({ ...userprofile, email: e.target.value })}  type="text" className="form-control"   />
              </div>
             <div className="col-md-6">
                <label className="labels">Phone</label>
                <input value={userprofile.phone} onChange={(e) => setUserprofile({ ...userprofile, phone: e.target.value })}  type="text" className="form-control"   />
              </div>
               <div className="col-md-6">
                <label className="labels">Address</label>
                <input value={userprofile.address} onChange={(e) => setUserprofile({ ...userprofile, address: e.target.value })}  type="text" className="form-control"   />
              </div> 
              
              <div className="col-md-6">
                <label className="labels">Location</label>
                <input value={userprofile.location} onChange={(e) => setUserprofile({ ...userprofile, location: e.target.value })} type="text" className="form-control"   />
              </div>
              
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
