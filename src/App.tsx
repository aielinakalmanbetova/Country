import React, { useState } from 'react';
import Country from './components/Country/Country.tsx';
import CountryInfo from './components/CountryInfo/CountryInfo.tsx';
import CountryWeather from './components/CountryWeather/CountryWeather.tsx';
import './components/Country/Country.css';


const App = () => {
  const [selectedCountry, setCountry] = useState(null);

  const handleSelectCountry = async (countryData) => {
    setCountry(countryData);
  };

  return (
    <div className='County d-flex'>
      <div className='container'><Country onSelectCountry={handleSelectCountry}/></div>
      <div className='container'><CountryInfo country={selectedCountry}/></div>
      <div className='container'><CountryWeather /></div>
    </div>
  );
};

export default App;