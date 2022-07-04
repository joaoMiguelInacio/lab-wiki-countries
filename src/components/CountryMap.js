import React from 'react';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import './CountryDetails/ContryDetails.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9hb2luYWNpbyIsImEiOiJjbDUxcHJjNWkwM3EzM2luNW1wend0dGN1In0.h1t40XnWVgagSH9q8FVG1w';

const CountryMap = ({lat, lng}) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    useEffect(() => {
      if (map.current) return;
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lat, lng],
          zoom: 5,
        });
    }, [lat, lng]);
  return (
    <div ref={mapContainer} className="map-container-small" />
  )
}

export default CountryMap;