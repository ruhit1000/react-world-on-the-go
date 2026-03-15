import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const [isVisited, setIsVisited] = useState(false)

    const handleVisited = () => {
        if (isVisited) {
            setIsVisited(false)
        } else {
            setIsVisited(true)
        }
    }
    
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Area: {country.area.area} {country.area.area > 300000? '(Big Country)': '(Small Country)'}</p>
            <button onClick={handleVisited}>{isVisited? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;