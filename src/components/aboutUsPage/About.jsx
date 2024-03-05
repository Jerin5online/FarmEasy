
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'
import "./About.css"


const About = () => {
  return (
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
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/woman-shopping-cart-supermarket_342744-1119.jpg?t=st=1709669396~exp=1709672996~hmac=1df8b8871fa41d9608c7ba3e4bf00a10c7a6c5d3f83ddc9c8bd625e05e24e1b0&w=1060" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    </div>

  )
}

export default About