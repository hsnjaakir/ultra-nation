import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flag, population, region} = props.country;
    const countryStyle = {border: '1px solid red', padding:'10px', margin: '10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>This is {name} <span><img src={flag} alt=""/></span></h1>
            <p>Population is {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
    );
};

export default Country;