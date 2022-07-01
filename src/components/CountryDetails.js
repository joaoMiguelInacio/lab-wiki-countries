export default function CountryDetails ({country, displayBorders}) {
  return (
    <div>
      <h5>{country.name.common}</h5>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      {displayBorders(country)} 
    </div>
  )
}