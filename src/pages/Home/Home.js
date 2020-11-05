import React, { useState } from 'react'
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import CitiesList from '../../components/CitiesList/CitiesList'

import constants from '../../constants'
import { isObjectEmpty } from '../../utils/variableValidations'
import { useSelector, useDispatch } from 'react-redux'



import './Home.css'

export default function Home() {

    let [citiesList, setCitiesList] = useState(useSelector(({ countryReducer }) => countryReducer.currentCountry.citiesList))
    const currentCountry = useSelector(({ countryReducer }) => countryReducer.currentCountry)

    const [countryLocalState, setCountryLocalState] = useState({})


    function setSelectedCountry(countryReceived) {
        setCountryLocalState(countryReceived)
    }

    async function handleSearchForWeather() {

        let weatherReturn = {}
        try {
            weatherReturn = await axios.get(`${constants.openWeatherAPIUrl}lat=${countryLocalState.countryLocation.latitude}&lon=${countryLocalState.countryLocation.longitude}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
            setCitiesList(weatherReturn.data.list)
        } catch (error) {
            sweetAlert('No Cities were found for this location', {
                icon: "error",
                timer: 3000
            })
        }

    }

    return (

        <div className="home-container">

            <div className="home-title">
                <div className="home-title-descriptions">
                    <span className="home-title-header">Follow these steps described below to see the weather on your chosen City:</span>
                    <span className="home-title-item">Add a pin on the map.</span>
                    <span className="home-title-item">Click on "Search" to see the 15 (or less) nearest Cities on the list.</span>
                    <span className="home-title-item">Click in one of these Cities to see the weather.</span>
                </div>
                <div className="home-title-button">
                    <div onClick={handleSearchForWeather}>Search</div>
                </div>
            </div>

            <div className="home-body">
                <GoogleMaps
                    defaultCenter={currentCountry.countryLocation ? { lat: currentCountry.countryLocation.latitude, lng: currentCountry.countryLocation.longitude } : constants.defaultLatLong}
                    defaultZoom={4}
                    showMarker={true}
                    onCountrySelect={setSelectedCountry}
                    pin={isObjectEmpty(countryLocalState) ?
                        (isObjectEmpty(currentCountry.currentCity) ? null : { lat: currentCountry.countryLocation.latitude, lng: currentCountry.countryLocation.longitude, countryCode: currentCountry.countryCode }) :
                        { lat: countryLocalState.countryLocation.latitude, lng: countryLocalState.countryLocation.longitude, countryCode: countryLocalState.countryCode }}
                />
                <CitiesList cities={citiesList} currentCountry={countryLocalState} />
            </div>


        </div>
    );
}