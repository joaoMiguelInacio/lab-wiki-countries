import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9hb2luYWNpbyIsImEiOiJjbDUxcHJjNWkwM3EzM2luNW1wend0dGN1In0.h1t40XnWVgagSH9q8FVG1w';

const Homepage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(10.9);
  const [lat, setLat] = useState(52.35);
  const [zoom, setZoom] = useState(3);
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default Homepage