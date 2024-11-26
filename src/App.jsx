import React from "react";
import VehicleList from "./components/VehicleList";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="gradient-text">PoolUp Dashboard</h1>
      <VehicleList />
    </div>
  );
};

export default App;
