import { Card } from "react-bootstrap";
import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./News.css";
import React, { useState, useEffect, useContext } from 'react';
import { newsAPI } from "../../Services/AllAPI";
import { Link } from "react-router-dom";
import { addNewsResponseContext } from "../../contexts/ContextShare";


const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [istoken,setIstoken] = useState(false)


  const {addNewsResponse , setAddNewsResponse} = useContext(addNewsResponseContext)

  const getnews = async()=>{
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {

        "Content-Type": "application/json",
        "Authorization": `Token ${token}`

      }
      const result = await newsAPI(reqHeader)
      console.log(result);
      setNewsData(result.data)
    }
  }
  useEffect(() => {
    getnews()
  }, [addNewsResponse])

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIstoken(true)
    }
  },[])
  return (
    <>
    <MyHeader/>
<div>
      <h2 className="mb-5 text-danger" style={{textAlign:"center",fontFamily:"serif"}}>NEWS AND UPDATES</h2>

  {newsData?.length>0?
  newsData.map((item)=>( <div className="row">
  <Card style={{ width: '97%', }}>
     <Card.Body>
       <Card.Title><span className="aboutfont">Title :</span> {item.title}  </Card.Title>
       <Card.Title><span className="aboutfont">Content :</span>{item.content}</Card.Title>
       <Card.Title><span className="aboutfont">Date posted :</span>{item.date_posted}</Card.Title>
       
       <i class="fa-solid fa-trash fa-1.5x" style={{display:"flex",justifyContent:"end"}}></i>
       <i class="fa-solid fa-user-pen" style={{justifyContent:"end"}}></i>
      
     </Card.Body>
   </Card>
   </div>)):<div>
             {istoken?<p style={{marginBottom:"500px" ,fontSize:"50px"}} className=' text-danger  text-center'>sorry! no such Crops currently available</p> : <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{textDecoration:"ActiveBorder"}}>PLEASE<Link style={{textDecoration:"none", color:"purple"}} to={'/login'}> LOGIN</Link></p></div>}
            </div>}
     </div>
    <Footer/>
    </>
  )
}

export default News