import "./Home.css";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MyHeader from "../myHeader/MyHeader";
import Footer from "../footer/Footer";

const Home = () => {
  // State variable to store news data
  const [newsData, setNewsData] = useState([]);

  // Fetch news data from an API (example)
  useEffect(() => {
    

    // fetchNewsData();
  }, []);

  // const fetchNewsData = async () => {
  //   try {
  //     const response = await fetch('https://api.example.com/news');
  //     const data = await response.json();
  //     setNewsData(data.articles);
  //   } catch (error) {
  //     console.error('Error fetching news data:', error);
  //   }
  // };

  return (<>
<MyHeader Home/>
    <div>
     <Carousel data-bs-theme="dark" className="w-100" style={{marginTop:"-65px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100 " style={{height:"700px"}}
          src="https://img.freepik.com/free-photo/farmland_1112-1236.jpg?t=st=1709635029~exp=1709638629~hmac=588b9d3df3981c505e6948708a6109c959a00a3c93aab05ff92fcb4005fb777b&w=1380"
          alt="First slide"
        />
        <Carousel.Caption style={{marginBottom:"20em",}}>
          <h1>WELCOME TO FARM EASE APP</h1>
          <p>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"   style={{height:"700px"}}
          src="https://img.freepik.com/free-photo/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai_188544-18554.jpg?t=st=1709635306~exp=1709638906~hmac=aaf7215626f21bedb7d43c0b5cd816acb54cd0eafef4ddefc7dd7b50ec21f245&w=1380"
          alt="Second slide"
        />
        <Carousel.Caption style={{marginBottom:"4em",}}>
          <h1 className="text-warning">IT'S MORE THAN A JOB ,IT'S A WAY OF LIFE.</h1>
          <p className="text-white">The farmer works the soil. The agriculturist works the farmer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"  style={{height:"700px"}}
          src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?t=st=1709635159~exp=1709638759~hmac=ce830a54d53724167e4e9a3b8b4d0594f701be2149506d7733c42504e5d7a6f7&w=1060"
          alt="Third slide"
        />
        <Carousel.Caption  style={{marginBottom:"4em",}}>
          <h1 className="text-white"> AGRICULTURE IS NOT FARMING IT'S FEEDING</h1>
          <p className="text-white">
          Agriculture is our wisest pursuit because it will, in the end, contribute most to real wealth, good morals, and happiness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    </div>
    <div id="cardss" className="row g-5 m-1">

   <div>
                <div class="row g-5">
                   
                    <div class="col-md-4">
                        <div class="blog-item position-relative overflow-hidden">
                            <img class="img-fluid" src="https://img.freepik.com/free-photo/portrait-young-smiling-farmer-with-freshly-picked-tomato-vegetable-standing-hothouse-garden_342744-1378.jpg?t=st=1709664880~exp=1709668480~hmac=f0c88879a75908afad212e93db8bdcc8aab3054a20a37391db10f928729e90c4&w=1060" alt=""/>
                            <p class="blog-overlay" href="">
                                <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span class="text-white fw-bold">Jan 01, 2050</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="blog-item position-relative overflow-hidden">
                            <img class="img-fluid" src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?t=st=1709644903~exp=1709648503~hmac=0ada43d4bf95dea6c2352e1828895a9bcedae08d650667a5253ec0c6b0dc8713&w=1060" alt=""/>
                            <p class="blog-overlay" href="">
                                <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span class="text-white fw-bold">Jan 01, 2050</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="blog-item position-relative overflow-hidden">
                            <img class="img-fluid" src="https://img.freepik.com/free-photo/young-asian-farmer-harvest-ripe-rice-with-sickle-rice-field_1150-53933.jpg?t=st=1709647214~exp=1709650814~hmac=d0797eee0a8cf7952985c044d1dd3b1d2b11f01ccce56d7793a843569d075114&w=1060" alt=""/>
                            <p
                             class="blog-overlay" href="">
                                <h4 class="text-white">Lorem elitr magna stet eirmod labore amet</h4>
                                <span class="text-white fw-bold">Jan 01, 2050</span>
                            </p>
                        </div>
                    </div>
                    
                   
                    
                </div>
            </div>
   </div>
    <div>
      
      <div>
        <h3>Latest News Updates in Agriculture</h3>
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <h4>{article.title}Farmers protest</h4>
              <p>{article.description}Empowering farmers with comprehensive crop information and disease solutions.</p>
              
              
            </li>
          ))}
        </ul>
      </div>
    </div>

<Footer/>
    </>     
  );
};

export default Home;
