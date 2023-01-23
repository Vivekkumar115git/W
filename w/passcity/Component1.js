import React, { useState } from 'react';

function Component1({ onCitySelect }) {
  const [selectedCity, setSelectedCity] = useState('');

  const cityOptions = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
    onCitySelect(event.target.value);
  };

  return (
    <div>
      <label>Select a city:</label>
      <select value={selectedCity} onChange={handleChange}>
        {cityOptions.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Component1;
