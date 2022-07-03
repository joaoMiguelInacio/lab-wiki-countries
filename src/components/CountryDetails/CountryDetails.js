import './ContryDetails.css';
import { useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';



export default function CountryDetails ({country, displayBorders}) {

  const MapboxGLMap = (lng, lat) => {
    const [map, setMap] = useState(null);
    const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9hb2luYWNpbyIsImEiOiJjbDUxcHJjNWkwM3EzM2luNW1wend0dGN1In0.h1t40XnWVgagSH9q8FVG1w';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [lng, lat],
        zoom: 5
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    initializeMap({ setMap, mapContainer });
  }, [country]);
  
    return (<div ref={el => (mapContainer.current = el)} className="map-container-small"/>);
  
};

  return (
    <div className='country-details'>
      <h3>{country.name.common} <img alt={country.name.common} src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/></h3>
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
      {MapboxGLMap(country.latlng[1], country.latlng[0])}
    </div>
  )
}