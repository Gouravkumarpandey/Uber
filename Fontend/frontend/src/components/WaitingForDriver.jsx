import React from "react";

const WaitingForDriver = ({ ride }) => {
  return (
    <div>
      <h2>Waiting for Driver</h2>
      <p>Ride Details: {JSON.stringify(ride)}</p>
    </div>
  );
};

export default WaitingForDriver;
