import './ContryDetails.css';

export default function CountryDetails ({country, displayBorders}) {
  return (
    <div className='country-details'>
      <h3>{country.name.common}</h3>
        <div className='capital-area-borders'>
          <div className='capital-area'>
          <p><span className='strong'>Capital: </span>{country.capital}</p>
          <p><span className='strong'>Area: </span>{country.area} km2</p>
          </div>
          {country.borders.lenght > 0
            ? <p className='strong'>
                Borders:
                {displayBorders(country)}
              </p>
            : null
          }
        </div>
    </div>
  )
}