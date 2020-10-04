import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'

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

    const addPinToMap = async pinReturn => {

        // 'https://maps.googleapis.com/maps/api/geocode/json?latlng=11.2742848,75.8013801&key=YOUR_API_KEY_HERE'

        if (props.updateMarker) {

            const getContryData = await axios.get(`${constants.googleMapsGetCountryUrl}latlng=${pinReturn.lat},${ pinReturn.lng}&key=${constants.googleMapsAPIKey}`)
            const results = getContryData.data.results
            let countryCode = ""

            if(results && results.length > 0){
                countryCode = results.pop().address_components.pop().short_name
            }

            setPin({ lat: pinReturn.lat, lng: pinReturn.lng, countryCode: countryCode })
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

                {props.showMarker && pin.lat && pin.lng && <Marker lat={pin.lat} lng={pin.lng} countryCode={pin.countryCode}/>}

            </GoogleMapReact>
        </div>
    );
}