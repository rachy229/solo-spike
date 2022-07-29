import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 



function App() {



  mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaHkyMjkiLCJhIjoiY2w2NTYwb3F5MnhuYjNjbzEyam84MzkzcCJ9.uLkhGXRBZOcb2rzrggZePQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState('');
  const [lat, setLat] = useState('');
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });


  const handleSubmit = () => {

    console.log('lat in handleSubmit', Number(lat));
    console.log('lng in handleSubmit', Number(lng));
  

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    })

    const marker1 = new mapboxgl.Marker({
      color: ('#eb34cc')

    })
    .setLngLat([lng, lat])
    .addTo(map);
  }



  return (

      <div>

        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
        <div>
        <input placeholder='latitude' value={lat} onChange={(event) => setLat(event.target.value)}></input>
        <input placeholder='longitude' value={lng} onChange={(event) => setLng(event.target.value)}></input>
        <button onClick={handleSubmit}>submit</button>
        </div>




      </div>


  );
}


export default App;
