import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitiedCountries }) => {
    const [isVisited, setIsVisited] = useState(false)

    const handleVisited = () => {
        setIsVisited(!isVisited);
        handleVisitiedCountries(country);
    }
    
    return (
        <div className={`country ${isVisited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? '(Big Country)': '(Small Country)'}</p>
            <p>Continent: {country.continents.continents}</p>
            <button onClick={handleVisited}>{isVisited? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;