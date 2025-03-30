import React from "react";

const FinishRide = ({ ride, setFinishRidePanel }) => {
  return (
    <div>
      <h2>Finish Ride</h2>
      <p>Ride Details: {JSON.stringify(ride)}</p>
      <button onClick={() => setFinishRidePanel(false)}>Close</button>
    </div>
  );
};

export default FinishRide;
