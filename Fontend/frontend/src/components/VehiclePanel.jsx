import React from 'react';

const VehiclePanel = ({ selectVehicle, fare, setConfirmRidePanel, setVehiclePanel }) => {
  const handleSelect = (vehicleType) => {
    selectVehicle(vehicleType);
    setVehiclePanel(false);
    setConfirmRidePanel(true);
  };

  return (
    <div>
      <h3>Select a Vehicle</h3>
      <ul>
        {Object.keys(fare).map((vehicleType) => (
          <li key={vehicleType} onClick={() => handleSelect(vehicleType)}>
            {vehicleType}: ₹{fare[vehicleType]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehiclePanel;
