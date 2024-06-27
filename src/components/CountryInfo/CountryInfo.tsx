import React from 'react';

const CountryInfo = ({ country }) => {

  return (
    <div className='info-country'>
      <h2 className='info-country'><strong>Информация по странам: </strong></h2>
      {country ? (
        <>
          <div>
            <h3>{country.name}</h3>
            <p><strong>Столица:</strong> {country.capital}</p>
            <p><strong>Регион:</strong> {country.region}</p>
            <p><strong>Площадь:</strong> {country.area}</p>
            <p><strong>Население:</strong> {country.population}</p>
            <p><strong>Граничит с:</strong> {country.borders.join(', ')}</p>
          </div>
        </>
      ) : (
        <p>Выберите страну: </p>
      )}
    </div>
  );
};


export default CountryInfo;