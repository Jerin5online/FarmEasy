import { Card } from "react-bootstrap";
import { newsAPI } from "../../Services/AllAPI";
import Footer from "../footer/Footer";
import MyHeader from "../myHeader/MyHeader";
import "./News.css";
import React, { useState, useEffect } from 'react';


const News = () => {
  const [newsData, setNewsData] = useState([]);

  // Fetch news data from an API (example)
  // useEffect(() => {
  //   const fetchNewsData = async () => {
  //     try {
  //       const response = await fetch('https://api.example.com/news');
  //       const data = await response.json();
  //       setNewsData(data.articles);
  //     } catch (error) {
  //       console.error('Error fetching news data:', error);
  //     }
  //   };

  //   fetchNewsData();
  // }, []);

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
  }, [])
      
    
  




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
       


     </Card.Body>
   </Card>
   </div>)):<p>No News Available</p>}
     </div>
    <Footer/>
    </>
  )
}

export default News