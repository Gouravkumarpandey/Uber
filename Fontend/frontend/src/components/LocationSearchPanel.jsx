import React from 'react';

const LocationSearchPanel = ({
  suggestions,
  setPanelOpen,
  setVehiclePanel,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSelect = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else {
      setDestination(suggestion);
    }
    setPanelOpen(false);
    setVehiclePanel(true);
  };

  return (
    <div>
      <h3>Suggestions</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearchPanel;
