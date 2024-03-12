import MyHeader from "../myHeader/MyHeader";
import "./Crop.css";
import React, { useState, useEffect } from 'react';


const Crop = () => {
  // State variables to store crop data and search query
  const [cropData, setCropData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCrops, setFilteredCrops] = useState([]);

  // Fetch crop data from an API (example)
  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const response = await fetch('https://api.example.com/crops');
        const data = await response.json();
        setCropData(data);
      } catch (error) {
        console.error('Error fetching crop data:', error);
      }
    };

    fetchCropData();
  }, []);

  // Update filtered crops based on search query
  useEffect(() => {
    setFilteredCrops(
      cropData.filter(crop =>
        crop.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [cropData, searchQuery]);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
          <MyHeader/>

      <h2 style={{fontFamily:"serif",textAlign:"center"}}>Crop Information</h2>
      {/* Search functionality */}
      {/* <div>
        <input type="text" placeholder="Search for a crop..." value={searchQuery} onChange={handleSearchChange} />
      </div> */}
      <div class="input-group mb-3" style={{alignItems:"center",justifyContent:"center"}}>
        <form class="d-flex">
          <input value={searchQuery} onChange={handleSearchChange} class="form-control me-sm-2 border border-dark" type="search" placeholder="Search for a crop..."/>
           <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    <div className="container">
   

    </div>
      
      {/* Display detailed information about various crops */}
      {filteredCrops.length === 0 ? (
        <p style={{fontSize:"2em",textAlign:"center"}}>No crops found.</p>
      ) : (
        <ul>
          {filteredCrops.map((crop, index) => (
            <li key={index}>
              <h3>{crop.name}</h3>
              <p>Planting Techniques: {crop.plantingTechniques}</p>
              <p>Irrigation Methods: {crop.irrigationMethods}</p>
              <p>Harvest Best Practices: {crop.harvestBestPractices}</p>
              {/* Include images or diagrams illustrating different stages of crop growth */}
              <img src={crop.image} alt={crop.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Crop