import React, { useState, useEffect, useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DeleteNewsAPI, newsAPI } from "../../Services/AllAPI";
import EditNews from "../EditNews/EditNews";
import MyHeader from "../myHeader/MyHeader";
import Footer from "../footer/Footer";
import { addNewsResponseContext } from "../../contexts/ContextShare";
import Swal from 'sweetalert2';

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [isToken, setIsToken] = useState(false);
  const { addNewsResponse } = useContext(addNewsResponseContext);

  useEffect(() => {
    const getNews = async () => {
      if (sessionStorage.getItem("token")) {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        };
        const result = await newsAPI(reqHeader);
        setNewsData(result.data);
      }
    };

    getNews();
  }, [addNewsResponse]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);

  const handleNewsDelete = async(id)=>{
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    };
    const result =await DeleteNewsAPI(id,reqHeader)
    console.log(result);
    if (result.status===204) {
      Swal.fire({
        title: "News Deleted Successfully",
        text: "Please fill in the form",
        icon: "success",
      });      setTimeout(() => {
        window.location.reload();
      }, 60);
      getNews()
      
    }
    else{
      console.log(result.response.data);
    }

  }

  return (
    <>
      {sessionStorage.getItem("admin") !== "6" && <MyHeader />}
      <div className='officebg' style={{marginTop:"-20px"}}>
        <h2 className="mb-5" style={{ textAlign: "center", fontFamily: "serif", marginTop: "20px" }}>News and updates</h2>

        {newsData?.length > 0 ?
          newsData.map((item) => (
            <div className="row" style={{ alignItems: "center", justifyContent: "center", }}>
              <Card style={{ width: '75%' }}>
                <Card.Body>
                  <Card.Title style={{color:"green"}}><span className="aboutfont" style={{fontSize:"30px"}}>Title:</span> {item.title}</Card.Title>
                  <Card.Title><span className="aboutfont" style={{fontSize:"30px"}}>Content:</span> {item.content}</Card.Title>
                  <Card.Title><span className="aboutfont" style={{fontSize:"30px"}}>Date posted:</span> {item.date_posted}</Card.Title>
                  {sessionStorage.getItem("user") && (
    <div className='mt-3' style={{ display: 'none' }}>
      <EditNews news={item} />
      <i className="fa-solid fa-user-pen ms-3 text-success" style={{ justifyContent: "end" }}></i>
    </div>
  )}
  
  {sessionStorage.getItem("admin") && (
    <div className='mt-3'>
      <EditNews news={item} />
      <Button onClick={()=>handleNewsDelete(item.id)} className='ms-2' variant="primary" >
        <i class="fa-solid fa-trash text-danger" />
      </Button>
    </div>
  )}
                </Card.Body>
              </Card>
            </div>
          )) :
          <div>
            {isToken ?
              <p style={{ marginBottom: "500px", fontSize: "50px" }} className=' text-danger text-center'>Sorry! No such news currently available</p> :
              <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p>
              </div>
            }
          </div>
        }
      </div>
      <Footer />
    </>
  );
};

export default News;
