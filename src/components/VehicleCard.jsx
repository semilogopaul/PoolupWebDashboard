import React from 'react';

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <h2>{vehicle.make} {vehicle.model} ({vehicle.year})</h2>
      <p><strong>Seats:</strong> {vehicle.seats}</p>
      <p><strong>VIN:</strong> {vehicle.vin_number}</p>
      <p><strong>Type:</strong> {vehicle.type || "N/A"}</p>
      <div className="vehicle-images">
        <img src={vehicle.interior_photo} alt="Interior" />
        <img src={vehicle.exterior_photo} alt="Exterior" />
      </div>
    </div>
  );
}

export default VehicleCard;
