import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import './GoogleMaps.css'

import constants from '../../constants'

export default function GoogleMaps(props) {

    let [pin, setPin] = useState({})
    
    const defaultCenter = props.defaultCenter
    const defaultZoom = props.defaultZoom

    const handleAPILoaded = (map, maps) => {
        console.log("Map is ready!")
    };

    const addPinToMap = pinReturn => {
        setPin({ lat: pinReturn.lat, lng: pinReturn.lng })

        if (props.updateMarker) {
            props.updateMarker(pinReturn)
        }
    }

    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: constants.googleMapsAPIKey }}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleAPILoaded={(map, maps) => handleAPILoaded(map, maps)}
                onClick={addPinToMap}>

                {props.showMarker && pin.lat && pin.lng && <Marker lat={pin.lat} lng={pin.lng}/>}

            </GoogleMapReact>
        </div>
    );
}