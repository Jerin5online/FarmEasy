
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import "./About.css"
import MyHeader from '../myHeader/MyHeader';
import Footer from '../footer/Footer';
import { cropsinfoAPI } from '../../Services/AllAPI';


const About = () => {

  const [cropsInfo, setCropsInfo] = useState([])

  const getcropinfo = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {

        "Content-Type": "application/json",
        "Authorization": `Token ${token}`

      }
      const result = await cropsinfoAPI(reqHeader)
      console.log(result);
      setCropsInfo(result.data)
    }
  }
  useEffect(() => {
    getcropinfo()
  }, [])
  return (
    <>
      <MyHeader />
      <div class="container mt-5">
        <h1 style={{ fontFamily: "serif" }}>Crop Information</h1>
       {cropsInfo?.length>0?
       cropsInfo.map((item)=>( <div className="row">

       <Card style={{ width: '97%', }}>
         <Card.Body>
           <Card.Title><span className="aboutfont">Name :</span> {item.name} </Card.Title>
           <Card.Title><span className="aboutfont">Description :</span>{item.description} </Card.Title>
           <Card.Title><span className="aboutfont">Climate :</span>{item.climate} </Card.Title>
           <Card.Title><span className="aboutfont">Growth Period :</span> {item.growth_period} </Card.Title>
           <Card.Title><span className="aboutfont">Harvestinng Time :</span>{item.harvesting_time} </Card.Title>
           <Card.Title><span className="aboutfont">Techniques :</span> {item.techniques} </Card.Title>


         </Card.Body>
       </Card>
     </div>)):<p>no crops available</p>}
      </div>
      <Footer />

    </>
  )
}

export default About