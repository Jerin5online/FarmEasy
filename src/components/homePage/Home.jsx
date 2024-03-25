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
    <MyHeader Home />
    <div>
      <Carousel data-bs-theme="dark" className="w-100">
        <Carousel.Item>
          <img
            className="d-block w-100 " style={{ height: "700px" }}
            src="https://img.freepik.com/free-photo/farmland_1112-1236.jpg?t=st=1709635029~exp=1709638629~hmac=588b9d3df3981c505e6948708a6109c959a00a3c93aab05ff92fcb4005fb777b&w=1380"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: "20em", }}>
            <h1>WELCOME TO FARM EASE APP</h1>
            <p>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: "700px" }}
            src="https://img.freepik.com/free-photo/farm-worker-driving-tractor-spraying-green-meadow-generated-by-ai_188544-18554.jpg?t=st=1709635306~exp=1709638906~hmac=aaf7215626f21bedb7d43c0b5cd816acb54cd0eafef4ddefc7dd7b50ec21f245&w=1380"
            alt="Second slide"
          />
          <Carousel.Caption style={{ marginBottom: "4em", }}>
            <h1 className="text-warning">IT'S MORE THAN A JOB ,IT'S A WAY OF LIFE.</h1>
            <p className="text-white">The farmer works the soil. The agriculturist works the farmer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: "700px" }}
            src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?t=st=1709635159~exp=1709638759~hmac=ce830a54d53724167e4e9a3b8b4d0594f701be2149506d7733c42504e5d7a6f7&w=1060"
            alt="Third slide"
          />
          <Carousel.Caption style={{ marginBottom: "4em", }}>
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
              <img class="img-fluid" src="https://img.freepik.com/free-photo/portrait-young-smiling-farmer-with-freshly-picked-tomato-vegetable-standing-hothouse-garden_342744-1378.jpg?t=st=1709664880~exp=1709668480~hmac=f0c88879a75908afad212e93db8bdcc8aab3054a20a37391db10f928729e90c4&w=1060" alt="" />
              <p class="blog-overlay" href="">
                <h4 class="text-white">If agriculture goes wrong, nothing else will have a chance to go right.
                </h4>
                <span class="text-white fw-bold">Jan 31, 2024</span>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog-item position-relative overflow-hidden">
              <img class="img-fluid" src="https://img.freepik.com/free-photo/medium-shot-smiley-farmer-cornfield_23-2149142834.jpg?t=st=1709644903~exp=1709648503~hmac=0ada43d4bf95dea6c2352e1828895a9bcedae08d650667a5253ec0c6b0dc8713&w=1060" alt="" />
              <p class="blog-overlay" href="">
                <h4 class="text-white">You want to live in harmony with nature and with each other.
                </h4>
                <span class="text-white fw-bold">Jan 23, 2020</span>
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="blog-item position-relative overflow-hidden">
              <img class="img-fluid" src="https://img.freepik.com/free-photo/young-asian-farmer-harvest-ripe-rice-with-sickle-rice-field_1150-53933.jpg?t=st=1709647214~exp=1709650814~hmac=d0797eee0a8cf7952985c044d1dd3b1d2b11f01ccce56d7793a843569d075114&w=1060" alt="" />
              <p
                class="blog-overlay" href="">
                <h4 class="text-white">Farming is the riskiest profession in the world since the fate of the crop is closely linked to the behaviour of the monsoon.
                </h4>
                <span class="text-white fw-bold">Jan 01, 2023</span>
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
    <div>

      <div>
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

    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" >
                <h1 class="mb-5">Services That We Offer</h1>
            </div>
            <div class="row gy-5 gx-4">
                <div class="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="img/service-1.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0">
                            <div class="service-icon">
                                <img class="img-fluid rounded-circle" src="https://eng.ruralvoice.in/uploads/images/2022/06/image_750x_62ba86a6765b4.jpg" alt=""/>
                            </div>
                            <h5 class="mb-3">Best Animal Selection</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a class="btn btn-square rounded-circle" href=""><i class="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="https://www.jru.edu.in/wp-content/uploads/2017/05/AGRI-SECTOR-GROWTH-INDIA.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0">
                            <div class="service-icon">
                                <img class="img-fluid rounded-circle" src="https://www.jru.edu.in/wp-content/uploads/2017/05/AGRI-SECTOR-GROWTH-INDIA.jpg" alt=""/>
                            </div>
                            <h5 class="mb-3">Breeding & Veterinary</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a class="btn btn-square rounded-circle" href=""><i class="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="img/service-3.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0">
                            <div class="service-icon">
                                <img class="img-fluid rounded-circle" src="https://files.worldwildlife.org/wwfcmsprod/images/Sustainable_Agriculture/hero_small/7ym5ecakzi_sustainable_agriculture_overview_XL_240144.jpg" alt=""/>
                            </div>
                            <h5 class="mb-3">Care & Milking</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a class="btn btn-square rounded-circle" href=""><i class="bi bi-chevron-double-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
  </>
  );
};

export default Home;
