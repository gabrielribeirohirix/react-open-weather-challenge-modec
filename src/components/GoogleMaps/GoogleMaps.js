import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import './GoogleMaps.css'

import constants from '../../constants'

export default function GoogleMaps(props) {

    let [pin, setPin] = useState({})

    const handleAPILoaded = (map, maps) => {
        console.log("Map is ready!")
    };

    const addPinToMap = pinReturn => {
        setPin({lat: pinReturn.lat ,lng: pinReturn.lng})
        props.updateMarker(pinReturn)
    }

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: constants.googleMapsAPIKey }}
                defaultCenter={{ lat: 36.366717, lng: 138.743049 }}
                defaultZoom={4}
                yesIWantToUseGoogleMapApiInternals
                onGoogleAPILoaded={(map, maps) => handleAPILoaded(map, maps)}
                onClick={addPinToMap}>

                <Marker
                lat={pin.lat}
                lng={pin.lng}
                text="" />

            </GoogleMapReact>
        </div>
    );
}