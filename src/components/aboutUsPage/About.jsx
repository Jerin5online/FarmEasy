
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./About.css"
import MyHeader from '../myHeader/MyHeader';
import Footer from '../footer/Footer';


const About = () => {
  return (
    <>
    <MyHeader/>
<div class="container mt-5">
        <h1 style={{fontFamily:"serif"}}>Crop Information</h1>
        <div className="row">
            {/* <div class="col-md-4">
                <div class="card">
                    <img src="crop1.jpg" class="card-img-top" alt="Crop 1 Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Crop 1</h5>
                        <p class="card-text">Detailed information about planting techniques, irrigation methods, fertilization, etc.</p>
                        <a href="crop1-details.html" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div> */}
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892233/EducationHub/photos/crops-growing-in-thailand.jpg" />
      <Card.Body>
        <Card.Title>Name : </Card.Title>
        <Card.Title>Description : </Card.Title>
        <Card.Title>Climate : </Card.Title>
        <Card.Title>Growth_Period : </Card.Title>
        <Card.Title>Harvesting_time : </Card.Title>
        <Card.Title>Techniques : </Card.Title>

        
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
            {/* <div class="col-md-4">
                <div class="card">
                    <img src="crop2.jpg" class="card-img-top" alt="Crop 2 Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Crop 2</h5>
                        <p class="card-text">Detailed information about planting techniques, irrigation methods, fertilization, etc.</p>
                        <a href="crop2-details.html" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div> */}
           
        </div>
    </div>
    <Footer/>

    </>
  )
}

export default About