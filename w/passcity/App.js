import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div>
      <Component1 onCitySelect={setSelectedCity} />
      <Component2 selectedCity={selectedCity} />
    </div>
  );
}

export default App;
