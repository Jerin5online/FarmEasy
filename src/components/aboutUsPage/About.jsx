import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import "./About.css";
import MyHeader from '../myHeader/MyHeader';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import { DeleteCropAPI, cropsinfoAPI } from '../../Services/AllAPI';
import { Button } from 'react-bootstrap';
import Editcrop from '../EditCrop/Editcrop';
import Swal from 'sweetalert2';

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

  const handleCropDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`,
    };
    const result = await DeleteCropAPI(id, reqHeader)
    console.log(result);
    if (result.status === 204) {
      getcropinfo()
      Swal.fire({
        title: "Crop Deleted Successfully",
        text: "",
        icon: "success",
      });
      setTimeout(() => {
        window.location.reload();
      }, 60);
    }
    else {
      console.log(result.response.data);
    }

  }


  return (
    <>
      {sessionStorage.getItem("admin") ? null : <MyHeader />}
      <div className='officebg' style={{ marginTop: "-50px" }}>
        <div className=" container mt-5 ">
          <h2 style={{ fontFamily: "serif", textAlign: "center", justifyContent: "center"  }}>Crop Information</h2>
          <div className="input-group mb-5" style={{ alignItems: "center", justifyContent: "center" }}>
            <form className="d-flex">
              <input onChange={(e) => setSearch(e.target.value)} className="form-control me-sm-2 border border-dark" type="search" placeholder="Search for a crop..." />
            </form>
          </div>
          {cropsInfo?.length > 0 ?
            cropsInfo.filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            })
              .map((item) => (
                <div className="row" key={item.id}>
                  <Card style={{ width: '97%' }}>
                    <Card.Body>
                      <Card.Title><span className="aboutfont">Name:</span> {item.name} </Card.Title>
                      <Card.Title><span className="aboutfont">Description:</span> {item.description} </Card.Title>
                      <Card.Title><span className="aboutfont">Climate:</span> {item.climate} </Card.Title>
                      <Card.Title><span className="aboutfont">Growth Period:</span> {item.growth_period} </Card.Title>
                      <Card.Title><span className="aboutfont">Harvesting Time:</span> {item.harvesting_time} </Card.Title>
                      <Card.Title><span className="aboutfont">Techniques:</span>
                        <ul className='mt-2'>
                          {item.techniques.map((technique, index) => (
                            <li key={index}>{technique} ● </li>
                          ))}
                        </ul>
                      </Card.Title>
                      {sessionStorage.getItem("user") ? null : (
                        <div className='mt-3'>
                        </div>
                      )}
                      {sessionStorage.getItem("admin") ? (
                        <div className='mt-3'>
                          <Editcrop crop={item} />
                          <Button onClick={() => handleCropDelete(item.id)} className='ms-2' variant="primary">
                            <i className="fa-solid fa-trash text-danger" />
                          </Button>
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>
                </div>
              )) : <div>
              {isToken ? <p style={{ marginBottom: "500px", fontSize: "50px" }} className=' text-danger  text-center'>sorry! no such Crops currently available</p> :
                <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
                  <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                  <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p></div>}
            </div>}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;
