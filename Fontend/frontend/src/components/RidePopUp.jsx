import React from "react";

const RidePopUp = ({ ride, setRidePopupPanel, confirmRide }) => {
  return (
    <div>
      <h2>Ride Details</h2>
      <p>{JSON.stringify(ride)}</p>
      <button onClick={confirmRide}>Confirm Ride</button>
      <button onClick={() => setRidePopupPanel(false)}>Close</button>
    </div>
  );
};

export default RidePopUp;
