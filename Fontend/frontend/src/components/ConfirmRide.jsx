import React from "react";

const ConfirmRide = ({ createRide, pickup, destination, fare, vehicleType }) => {
  return (
    <div>
      <h2>Confirm Ride</h2>
      <p>Pickup: {pickup}</p>
      <p>Destination: {destination}</p>
      <p>Fare: {fare[vehicleType]}</p>
      <button onClick={createRide}>Confirm</button>
    </div>
  );
};

export default ConfirmRide;
