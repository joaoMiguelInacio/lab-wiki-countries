import './ContryDetails.css';

export default function CountryDetails ({country, displayBorders}) {
  return (
    <div className='country-details'>
      <h3>{country.name.common} <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/></h3>
        <div className='capital-area-borders'>
          <div className='capital-area'>
          <p><span className='strong'>Capital: </span>{country.capital}</p>
          <p><span className='strong'>Area: </span>{country.area} km2</p>
          </div>
          {country.borders.length > 0
            ? <div>
                <p className='strong center'>
                  Borders:
                </p>
                <div className='borders-container'>
                  {displayBorders(country)}
                </div>
              </div>
            : null
          }
        </div>
    </div>
  )
}