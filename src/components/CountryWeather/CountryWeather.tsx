import React from 'react';

const CountryWeather = () => {

  return (
    <div className='weather'>
      <h2><strong>Погода: </strong></h2>
      <div>
        <p>Температура:°C</p>
        <p>Влажность: %</p>
        <p>Скорость ветра: м/с</p>
      </div>
    </div>
  );
};

export default CountryWeather;