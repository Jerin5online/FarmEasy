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
  return (
    <div>
      <h2>Welcome to Farm Ease App</h2>
      <p>Empowering farmers with comprehensive crop information and disease solutions.</p>
      
      {/* Highlights of key features */}
      <div>
        <h3>Key Features</h3>
        <ul>
          <li>Comprehensive crop information</li>
          <li>Disease solutions</li>
          <li>Real-time news updates</li>
          {/* Add more features as needed */}
        </ul>
      </div>
      
      {/* Latest news updates in agriculture */}
      <div>
        <h3>Latest News Updates in Agriculture</h3>
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              {/* Include additional details like author, date, etc. as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
