import React from 'react';

function Component2({ selectedCity }) {
  const reversedCity = selectedCity.split('').reverse().join('');

  return <p style={{ color: 'red' }}>{reversedCity}</p>;
}

export default Component2;
