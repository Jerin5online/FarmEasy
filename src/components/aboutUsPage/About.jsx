import React from 'react'
import "./About.css"


const About = () => {
  return (
<div class="container mt-5">
        <h1>Crop Information</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="crop1.jpg" class="card-img-top" alt="Crop 1 Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Crop 1</h5>
                        <p class="card-text">Detailed information about planting techniques, irrigation methods, fertilization, etc.</p>
                        <a href="crop1-details.html" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="crop2.jpg" class="card-img-top" alt="Crop 2 Image"/>
                    <div class="card-body">
                        <h5 class="card-title">Crop 2</h5>
                        <p class="card-text">Detailed information about planting techniques, irrigation methods, fertilization, etc.</p>
                        <a href="crop2-details.html" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About