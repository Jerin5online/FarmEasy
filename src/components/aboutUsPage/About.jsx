import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import "./About.css"
import MyHeader from '../myHeader/MyHeader';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { cropsinfoAPI } from '../../Services/AllAPI';

const About = () => {
  const [cropsInfo, setCropsInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [isToken, setIsToken] = useState(false);

  const getcropinfo = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      };
      const result = await cropsinfoAPI(reqHeader);
      setCropsInfo(result.data);
    }
  };

  useEffect(() => {
    getcropinfo();
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      {sessionStorage.getItem("admin") ? null : <MyHeader />}
      <div className="container mt-5">
        <h1 style={{ fontFamily: "serif" }}>Crop Information</h1>
        <div className="input-group mb-5" style={{ alignItems: "center", justifyContent: "center" }}>
          <form className="d-flex">
            <input onChange={(e) => setSearch(e.target.value)} className="form-control me-sm-2 border border-dark" type="search" placeholder="Search for a crop..." />
          </form>
        </div>
        {cropsInfo?.length > 0 ?
          cropsInfo.filter((item) => {
            return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
          })
            .map((item) => (<div className="row">

              <Card style={{ width: '97%' }}>
                <Card.Body>
                  <Card.Title><span className="aboutfont">Name :</span> {item.name} </Card.Title>
                  <Card.Title><span className="aboutfont">Description :</span>{item.description} </Card.Title>
                  <Card.Title><span className="aboutfont">Climate :</span>{item.climate} </Card.Title>
                  <Card.Title><span className="aboutfont">Growth Period :</span> {item.growth_period} </Card.Title>
                  <Card.Title><span className="aboutfont">Harvesting Time :</span>{item.harvesting_time} </Card.Title>
                  <Card.Title><span className="aboutfont">Techniques :</span> {item.techniques} </Card.Title>

                  {sessionStorage.getItem("user") ? null : (
    <div className='mt-3'>
    </div>
  )}

  {sessionStorage.getItem("admin") ? (
    <div className='mt-3'>
      <i className="fa-solid fa-trash text-danger"></i>
      <i className="fa-solid fa-user-pen ms-3 text-success" style={{ justifyContent: "end" }}></i>
    </div>
  ) : null}

                </Card.Body>
              </Card>
            </div>)) : <div>
              {isToken ? <p style={{ marginBottom: "500px", fontSize: "50px" }} className=' text-danger  text-center'>sorry! no such Crops currently available</p> :
                <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                  <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                  <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p></div>}
            </div>}
      </div>
      <Footer />
    </>
  )
}

export default About;
