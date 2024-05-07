import "./Home.css";
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MyHeader from "../myHeader/MyHeader";
import Footer from "../footer/Footer";
import { Button } from "react-bootstrap";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {


 
  }, []);

  

  return (<>
    <MyHeader Home />
    <div>
      <Carousel data-bs-theme="dark" className="w-100">
        <Carousel.Item>
          <img
            className="d-block w-100 " style={{ height: "800px" }}
            src="https://images.pexels.com/photos/1227513/pexels-photo-1227513.jpeg?cs=srgb&dl=pexels-oleksandr-p-1227513.jpg&fm=jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{ marginBottom: "20em", }}>
            <h1  className="hometext" >WELCOME TO FARM EASE APP</h1>
            <p>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings. .</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: "800px" }}
            src="https://cdn.pixabay.com/photo/2016/11/08/05/54/agriculture-1807581_640.jpg"
          />
          <Carousel.Caption style={{ marginBottom: "19em", }}>
            <h1 className=" hometext text-warning">IT'S MORE THAN A JOB ,IT'S A WAY OF LIFE.</h1>
            <p className="">The farmer works the soil. The agriculturist works the farmer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{ height: "800px" }}
            src="https://img.freepik.com/free-photo/farmland_1112-1236.jpg?t=st=1711865811~exp=1711869411~hmac=2e203ae4512f8a4807de24f1590476d659360b2b4c3f7b9520542c7f72c3d72d&w=1380"
            alt="Third slide"
          />
          <Carousel.Caption style={{ marginBottom: "19em", }}>
            <h1 className=" hometext text-warning"> AGRICULTURE IS NOT FARMING IT'S FEEDING</h1>
            <p className="">
              Agriculture is our wisest pursuit because it will, in the end, contribute most to real wealth, good morals, and happiness.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
         

    </div>

    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="https://demo.htmlcodex.com/2616/dairy-website-template/img/product-4.jpg" alt="About" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="display-5 mb-4">Best Organic Fruits And Vegetables</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="/products">Buy Now</a>
          </div>
        </div>
      </div>
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
                <div class="col-lg-4  pt-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="https://demo.htmlcodex.com/2463/organic-food-website-template/img/blog-2.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0 mt-5">
                            
                            <h5 class="mb-3">Fresh Product Straight from Farmer</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="https://www.shutterstock.com/image-photo/taking-care-crop-aerial-view-600nw-2083392067.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0 mt-5">
                            
                            <h5 class="mb-3">Infromations About All Agricultural needs</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 pt-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item d-flex h-100">
                        <div class="service-img">
                            <img class="img-fluid" src="https://demo.htmlcodex.com/2463/organic-food-website-template/img/blog-3.jpg" alt=""/>
                        </div>
                        <div class="service-text p-5 pt-0 mt-5">
                            
                            <h5 class="mb-3">Care and Cultivation</h5>
                            <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
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
