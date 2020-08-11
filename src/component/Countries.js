import React from 'react'
import { Link }  from 'react-router-dom'; 
import Card from './CountryCard';

const Countries = (props) => {
  return (
    <section className="countries-conatiner container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 col-gap-4 row-gap-8  justify-center sm:justify-between items-center p-4">
              {
                props.countries.map( (country,index) => (
                   <Link to={`details/${country.alpha3Code}`} key={index} >
                     <Card name={country.name} flagImg={country.flag} population={country.population}  region={country.region} capital={country.capital}  />
                   </Link>
                   )
                  )
              }
    </section>
  )
}

export default Countries;
