import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Country = ({ onSelectCountry }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all?fields=alpha3Code,name');
        setCountries(response.data);
      } catch (error) {
        console.log('Error countries', error);
      }
    };
    fetchCountries();
  }, []);

  const selectCountry = async (alpha3Code) => {
    try {
      const response = await axios.get(`https://restcountries.com/v2/alpha/${alpha3Code}`);
      onSelectCountry(response.data);
    } catch (error) {
      console.log('Error details:', error);
    }
  };

  return (
    <div className='onclick-country'>
      <h2 className='onclick-country'><strong>Страны: </strong></h2>
      <ul className='ul-country'>
        {countries.map((country) => (
          <li key={country.alpha3Code} onClick={() => selectCountry(country.alpha3Code)}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;