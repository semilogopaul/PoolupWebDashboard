import React, { useEffect, useState } from 'react';
import VehicleCard from './VehicleCard';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Step 1: Add loading state

  useEffect(() => {
    const fetchData = async () => {
      const apiEndpoint = "https://poolupbackend.onrender.com/api/viewAllVehicles";
      const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

      try {
        const response = await fetch(apiEndpoint, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setVehicles(data.vehicles);
        setLoading(false); // Step 2: Set loading to false after data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="vehicle-list">
      {loading ? ( // Step 3: Show loading state while fetching
        <div className="loadingState">
          <i className="fa-duotone fa-solid fa-spinner"></i>
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        vehicles.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)
      )}
    </div>
  );
}

export default VehicleList;
