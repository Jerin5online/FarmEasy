import "./News.css";
import React, { useState, useEffect } from 'react';


const News = () => {
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
      <h2>News and Updates</h2>
      {/* Render news sections */}
      {newsData.map((section, index) => (
        <div key={index}>
          <h3>{section.category}</h3>
          {/* Render news articles */}
          <ul>
            {section.articles.map((article, i) => (
              <li key={i}>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
                {/* Include additional details like author, date, etc. as needed */}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {/* Featured articles or highlights */}
      <div>
        <h3>Featured Articles</h3>
        {/* Render featured articles */}
        <ul>
          {newsData.map((section, index) => (
            <li key={index}>
              <h4>{section.articles[0].title}</h4>
              <p>{section.articles[0].description}</p>
              {/* Include additional details like author, date, etc. as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default News