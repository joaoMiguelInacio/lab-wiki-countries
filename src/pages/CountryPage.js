import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import ProgressIndicator from '../components/ProgressIndicator';
import { useParams } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9hb2luYWNpbyIsImEiOiJjbDUxcHJjNWkwM3EzM2luNW1wend0dGN1In0.h1t40XnWVgagSH9q8FVG1w';

export default function CountryPage() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${id}`
        );
        setCountry(response.data);
        if (map.current) return;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [response.data.latlng[1], response.data.latlng[0]],
          zoom: 5,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountry();
  }, [id]);

  const displayBorders = (country) => {
    return country.borders.map((border) => (
      <li className='border-list-items' key={country.borders.indexOf(border)}>{border}</li>
    ));
  };

  return (
    <div>
      {country ? (
        <>
          <CountryDetails country={country} displayBorders={displayBorders} />
          <div ref={mapContainer} className="map-container-small" />
        </>
      ) : (
        <ProgressIndicator />
      )}
    </div>
  );
}
