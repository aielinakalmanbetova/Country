import React from 'react';
import Country from './components/Country/Country.tsx';
import CountryInfo from './components/CountryInfo/CountryInfo.tsx';
import CountryWeather from './components/CountryWeather/CountryWeather.tsx';
import './components/Country/Country.css';


const App = () => {
  return (
    <div className='County d-flex'>
      <div className='container'><Country /></div>
      <div className='container'><CountryInfo /></div>
      <div className='container'><CountryWeather /></div>
    </div>
  );
};

export default App;