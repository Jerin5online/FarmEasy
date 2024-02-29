import "./Home.css";
import React, { useState, useEffect } from 'react';

const Home = () => {
  // State variable to store news data
  const [newsData, setNewsData] = useState([]);

  // Fetch news data from an API (example)
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://api.example.com/news');
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);
  return (<>


    <div className="main">
      <div className="col col1">
        <h2>Welcome to Farm Ease App</h2>
        <p>Empowering farmers with comprehensive crop information and disease solutions.</p>
        {/* <button type="button">More</button> */}
      </div>
      <div className="col">
        <div className="card card1"></div>
        <div className="card card2"></div>
        <div className="card card3"></div>
        <div className="card card4"></div>
        <div className="card card5"></div>
        <div className="card card6"></div>
      </div>
      
    </div>
    <div>
      {/* <div>
        <h3>Key Features</h3>
        <ul>
          <li>Comprehensive crop information</li>
          <li>Disease solutions</li>
          <li>Real-time news updates</li>
        </ul>
      </div> */}
      
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


    </>     
  );
};

export default Home;
