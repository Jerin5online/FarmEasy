
import React, { useEffect, useState } from 'react';
import MyHeader from '../myHeader/MyHeader';
import "./ImageHealth.css";
import { Button, Card } from 'react-bootstrap';
import { gethealthassessmentAPI, imagehealthAPI } from '../../Services/AllAPI';
import { Link } from 'react-router-dom';

function ImageHealth() {
  const [preview, setPreview] = useState("");
  const [datas, setdatas] = useState([])
  const [biological, setbiological] = useState({})
  const [prevention, setprevention] = useState({})
  const [isToken, setIsToken] = useState(false);



  const [healthdetails, sethealthtDetails] = useState({
    image: ""
  });

  useEffect(() => {
    if (healthdetails.image) {
      setPreview(URL.createObjectURL(healthdetails.image));
    }
  }, [healthdetails.image]);

  const handleimagedetails = async (e) => {
    e.preventDefault();
    const { image } = healthdetails;
    if (!image) {
      Swal.fire({
        title: "🚫",
        icon: "info",
        text: "Please fill the form completely"
      });
    } else {
      const reqBody = new FormData();
      reqBody.append("image", image);
      const result = await imagehealthAPI(reqBody);
      if (result.status == 200) {
        // console.log(result);
        setdatas(result.data)
        setbiological(result.data.disease.treatment.prevention)
        setprevention(result.data.disease.treatment.biological)
        //console.log("dattaaaa",result.data)
      } else {
        console.log(result.response.data.disease);
      }
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsToken(true);
    }
  }, []);

  console.log(datas);

  return (
    <>
      <MyHeader />
     <div className='healthbg'>
        <h1 style={{ textAlign: "center"  }}>HERE IS THE IMAGES HEALTH ASSESSMENT</h1>
  
        {isToken && (<div className=''>
          <div style={{ textAlign: "center", justifyContent: "center", display: "flex", marginTop: "25px" }}>
            <label for="file" class="custum-file-upload" >
              {preview ?
                <img src={preview} alt="" className='mt-5' style={{ height: "300px", width: "300px" }} /> :
                <div>
                  <div class="icon">
                    <svg viewBox="0 0 24 24" fill="" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" fill=""></path></g>
                    </svg>
                  </div>
                  <div class="text">
                    <span>Click to upload image</span>
                  </div>
                </div>
              }
              <input id="file" onChange={(e) => sethealthtDetails({ ...healthdetails, image: e.target.files[0] })} type="file" />
            </label>
          </div>
          <Button
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft:"740px",
              marginTop:"50px"
            }}
            onClick={handleimagedetails}
            type="submit"
          >
            Submit
          </Button>
          <div className="row" style={{ alignItems: "center", justifyContent: "center" }}>
            <Card className='cardcolor' style={{ width: '75%', marginTop: "13rem" }}>
              <Card.Body className=''>
                <Card.Title style={{ display: datas.disease ? 'block' : 'none' }}><span className="aboutfont">Is Healthy:</span>{datas?.is_healthy ? "True" : "False"}</Card.Title>
                {/* Conditional rendering for disease data */}
                {datas?.disease && (
                  <>
                    <Card.Title><span className="aboutfont">Name:</span>{datas.disease.name}</Card.Title>
                    <Card.Title><span className="aboutfont">Probability:</span>{datas.disease.probability}</Card.Title>
                    <Card.Title><span className="aboutfont">Description:</span>{datas.disease.description}</Card.Title>
  
                    {/* Map through treatments if treatment is an array */}
                    {Array.isArray(datas?.disease?.treatment) ? (
                      <div>
                        {datas.disease.treatment.map((treatment, index) => (
                          <h3 key={index}>
                            <span className="aboutFont text-warning">Treatment {index + 1}:</span> {treatment}
                          </h3>
                        ))}
                      </div>
                    ) : (
                      // Render individual properties of treatment object if treatment is an object
                      <div>
                        {/* Map through treatments if treatment is an array */}
                        {Array.isArray(datas?.disease?.treatment) && datas.disease.treatment.length > 0 && (
                          <div>
                            <h3><span className="aboutFont text-warning">Treatments:</span></h3>
                            {datas.disease.treatment.map((treatment, index) => (
                              <h4 key={index}>- {treatment}</h4>
                            ))}
                          </div>
                        )}
  
                        {/* Map through biological if it's an array */}
                        {Array.isArray(biological) && biological.length > 0 && (
                          <div>
                            <h3><span className="aboutFont text-warning">Prevention:</span></h3>
                            {biological.map((bio,index) => (
                              <h4 key={index}>- {bio}</h4>
                            ))}
                          </div>
                        )}
  
                        {/* Map through prevention if it's an array */}
                        {Array.isArray(prevention) && prevention.length > 0 && (
                          <div>
                            <h3><span className="aboutFont text-warning">Biological:</span></h3>
                            {prevention.map((prev, index) => (
                              <h4 key={index}>- {prev}</h4>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
  
                  </>
                )}
                {/* Error message if disease data is not available */}
                {!datas?.disease && (
                  <Card.Text className="text-danger">No disease data available.</Card.Text>
                )}
              </Card.Body>
            </Card>
          </div>
  
        </div>)}:
        <div>
              {isToken ?
                <p style={{ marginBottom: "500px", fontSize: "50px"  }}></p> :
                <div className='d-flex justify-content-center align-items-center flex-column mb-5' style={{marginTop:"70px"}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/6360/6360303.png" alt="login gif" height={'300px'} width={'300px'} />
                  <p className='mt-5' style={{ textDecoration: "ActiveBorder" }}>PLEASE<Link style={{ textDecoration: "none", color: "purple" }} to={'/login'}> LOGIN</Link></p>
                </div>
              }
            </div>
     </div>
    </>
  );
}

export default ImageHealth;

