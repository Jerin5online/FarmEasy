import React, { useState } from 'react'

import Adminheader from './Adminheader';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,

  
} from 'mdb-react-ui-kit';
import EditAdmin from './EditAdmin';
import { Table } from 'react-bootstrap';
import { Collapse } from 'bootstrap';


function Adminhome() {
 
  // const [adminInfo , setAdminInfo] = useState({})

  // const getAminInfo = async ()=>{
  //   if(sessionStorage.getItem("token")){
  //     const token = sessionStorage.getItem("token")
  //     const reqHeader ={
  //       "Content-Type": "application/json",
  //       "Authorization": `Token ${token}`
  //     }
  //     const result = await getAdminInfoAPI(reqHeader)
  //     console.log(result);
  //     setAdminInfo(result)
  //   }
  // }
  // useState(()=>{
  //    getAminInfo()
  // },[])

  return (
    <>
    
 <div className='bgadmin d-flex align-items-center justify-content-center'>


 <section className='mt-5' >
      <MDBContainer>
        
<h1 style={{fontFamily:"fantasy"}} >WELCOME ADMIN</h1>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">FARMEASE ADMIN PANNEL</p>
                <p className="text-muted mb-4"></p>
                <div className="d-flex justify-content-center mb-2">
                  
                  <EditAdmin/>
                </div>
              </MDBCardBody>
            </MDBCard>

            
          </MDBCol>
          <MDBCol lg="8">
              <Adminheader/>
           </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
 </div>


  
    
 
        
      
       
    </>
  )
}

export default Adminhome
