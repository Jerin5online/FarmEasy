import { Card } from "react-bootstrap";
import { diseaseAPI } from "../../Services/AllAPI";
import Footer from "../footer/Footer";
import "./Disease.css";
import React, { useState, useEffect } from 'react';


const Disease = () => {
   // State variables to store disease data and search query
   const [diseaseData, setDiseaseData] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');

   console.log(searchQuery);

   const getsolutions = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {

        "Content-Type": "application/json",
        "Authorization": `Token ${token}`

      }
      const result = await diseaseAPI(reqHeader)
      console.log(result);
      setDiseaseData(result.data)
    }
  }
  useEffect(() => {
    getsolutions()
  },[])
 
  

 
  return (
<>
   <div className="container mt-5">
      <h2>Disease Solutions</h2>

      <p>If you have a complaint about a crop disease, please contact our support team.</p>
      
      <div>
        <form className="d-flex">
        <input  onChange={(e)=>setSearchQuery(e.target.value)} className="form-control me-sm-2 w-25" type="search" placeholder="Search for a disease..."/>
      </form>
  
      {
        diseaseData?.length>0?
        diseaseData.filter((item)=>{
          return searchQuery.toLowerCase()===''?item:item.symptoms.toLowerCase().includes(searchQuery)
        }).map((item)=>(<div className="row mt-4" >
       
        <Card style={{ width: '97%', }}>
         <Card.Body>
           <Card.Title><span className="aboutfont">Symptoms :</span> {item.symptoms} </Card.Title>
           <Card.Title><span className="aboutfont">Solutions :</span>{item.solution} </Card.Title>
           <Card.Title><span className="aboutfont">Description :</span>{item.description}</Card.Title>
        </Card.Body>
       </Card>
     </div>)):<p>No diseases found.</p>

      }

      </div>
      
      {/* Expert solutions and advice for common crop diseases */}
      <div>
       
        
      </div>
      </div>

    </>
  )
}

export default Disease