import React, { useEffect} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

let center = {
  lat: 6.172327595747,
  lng: 1.2699408668779
};
function Mapcontainer () {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map',
    googleMapsApiKey: "YOUR_API_KEY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(`Your current position is: ${lat}, ${lon}`);
        center.lat= lat;
        center.lng =lon;
      });
  },[])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        
      </GoogleMap>
  ) : <></>
}

export default React.memo(Mapcontainer)