    import React, { useRef, useEffect, useState } from 'react';
    import mapboxgl from '!mapbox-gl'; 
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import Typography from '@mui/material/Typography';
    import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { pink, red } from '@mui/material/colors';
import { CardMedia } from '@mui/material';





    function Map() {


    const theme = createTheme({
    palette: {
        primary: {
        light: '#fff64f',
        main: '#ffc400',
        dark: '#c79400',
        contrastText: '#000000',
        },
        secondary: {
        light: '#ff867f',
        main: '#ff5252',
        dark: '#c50e29',
        contrastText: '#000000',
        },
    },
    });




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

    return(
        <ThemeProvider theme={theme} >
        <Card sx={{ maxWidth: 345, m:2, background: pink[400] }} >
        <Typography variant="body1" color="text.primary" align="center">
            Here is another map
        </Typography> 
        <Typography variant="body2" color="text.secondary">
            it lives in a different component and 
            is different from the map above it
        </Typography>
        
        <CardMedia sx={{ p:2 }}>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
            <div>
            <input placeholder='latitude' value={lat} onChange={(event) => setLat(event.target.value)}></input>
            <input placeholder='longitude' value={lng} onChange={(event) => setLng(event.target.value)}></input>
            <button onClick={handleSubmit}>submit</button>
            </div>
        </CardMedia>


        </Card>
        </ThemeProvider>

    )

}

export default Map;