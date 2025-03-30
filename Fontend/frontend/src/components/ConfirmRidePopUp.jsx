import React from "react";

const ConfirmRidePopUp = ({ ride, setConfirmRidePopupPanel }) => {
  return (
    <div>
      <h2>Confirm Ride</h2>
      <p>Ride Details: {JSON.stringify(ride)}</p>
      <button onClick={() => setConfirmRidePopupPanel(false)}>Close</button>
    </div>
  );
};

export default ConfirmRidePopUp;
