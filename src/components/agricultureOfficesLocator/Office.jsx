import "./Office.css";
import React, { useState, useEffect } from 'react';

const Office = () => {
  // State variables to store map data and selected office
  const [mapData, setMapData] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);

  // Fetch map data from an API (example)
  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('https://api.example.com/agriculture-offices');
        const data = await response.json();
        setMapData(data);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchMapData();
  }, []);

  // Function to handle selecting an office
  const handleOfficeSelect = (office) => {
    setSelectedOffice(office);
  };

  // Function to handle getting directions
  const handleGetDirections = () => {
    // Implement logic to open navigation service with selected office coordinates
    if (selectedOffice) {
      window.open(`https://maps.google.com/maps?q=${selectedOffice.latitude},${selectedOffice.longitude}`);
    }
  };
  return (
    <div>
    <h2>Agriculture Offices Locator</h2>
    {/* Map-based feature to locate nearby agriculture offices */}
    <div>
      {/* Render map with markers for agriculture offices */}
      {/* Implement map functionality (e.g., Google Maps) */}
    </div>
    
    {/* Contact information for agriculture offices */}
    {selectedOffice && (
      <div>
        <h3>{selectedOffice.name}</h3>
        <p>Contact Information:</p>
        <p>Email: {selectedOffice.email}</p>
        <p>Phone: {selectedOffice.phone}</p>
        <button onClick={handleGetDirections}>Get Directions</button>
      </div>
    )}
  </div>
  )
}

export default Office