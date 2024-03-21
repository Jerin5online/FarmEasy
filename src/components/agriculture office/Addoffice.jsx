import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { addAgriofficeAPI } from '../../Services/AllAPI';
import Office from '../agricultureOfficesLocator/Office';


function Addoffice() {

 const [addAgriOffice , setAddAgriOffice] = useState({
  name:"",
  location:"",
  contact_number:"",
  email:""
 });

 const [token, setToken] = useState("");

 useEffect(() => {
   if (sessionStorage.getItem("token")) {
     setToken(sessionStorage.getItem("token"));
   } else {
     setToken("");
   }
 }, []);
 
 console.log(addAgriOffice);
  
 const handleAdd2 = async (e)=>{
  e.preventDefault()

  const {name,location,contact_number,email}= addAgriOffice

  if(!name || !location || !contact_number || !email){
    Swal.fire({
      title: "🚫",
      icon: "info",
      text: "please fill the form completely"
  });

  }else{
    const reqBody = {
      name: name,
      location: location,
      contact_number: contact_number,
      email: email,
    };
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };

      const result = await addAgriofficeAPI(reqBody, reqHeader);
      console.log(result);

      if (result.status === 201) {
        console.log(result);
        Swal.fire({
          title: "",
          icon: "success",
          text: "Office successfully added"
        });
        setTimeout(() => {
          window.location.reload();
        }, 100);
        // Update the news list after successfully adding the news
        // Clear the form fields after successful addition
      } else {
        console.log(result.response.data);
      }
    }
    
  }
 
  
 }
  return (
    <>
       <div id='cropbg' className='d-flex align-items-center justify-content-center'>
        <div className='card'>
          <Link className='text-decoration-none' to={'/adminhome'}><i className="fa-solid fa-arrow-left"></i> Back to home</Link>

          <div className="card-headerr mt-2">
            <div className="text-header">ADD AGRICULTURE OFFICE</div>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Name</label>
                <input value={addAgriOffice.name} onChange={(e)=>setAddAgriOffice({...addAgriOffice,name:e.target.value})}  required className="form-control" name="username" id="username" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="text">Location</label>
                <input value={addAgriOffice.location} onChange={(e)=>setAddAgriOffice({...addAgriOffice,location:e.target.value})}  required className="form-control" name="location" id="location" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contact Number</label>
                <input value={addAgriOffice.contact_number} onChange={(e)=>setAddAgriOffice({...addAgriOffice,contact_number:e.target.value})}  required className="form-control" name="contact-number" id="contact-number" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Email Address</label>
                <input value={addAgriOffice.email} onChange={(e)=>setAddAgriOffice({...addAgriOffice,email:e.target.value})}  required className="form-control" name="email" id="email" type="text" />
              </div>
            
             
              <input onClick={handleAdd2} type="submit" className="btn1" value="Submit" />
            </form>
          </div>
        </div>

      </div>
      <Office/>
     </>
  )
}

export default Addoffice
