import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2luYWNpbyIsImEiOiJjbDUxcHJjNWkwM3EzM2luNW1wend0dGN1In0.h1t40XnWVgagSH9q8FVG1w';

const Homepage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10.9, 52.35],
      zoom: 3
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default Homepage