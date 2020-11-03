import React, { useState } from 'react'
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import CitiesList from '../../components/CitiesList/CitiesList'

import constants from '../../constants'
import { useSelector } from 'react-redux'

import './Home.css'

export default function Home() {

    let [citiesList, setCitiesList] = useState([])
    const currentCountryLocation = useSelector(({countryReducer}) => countryReducer.currentCountry.countryLocation)

    async function handleSearchForWeather() {

        let weatherReturn = {}
        try {
            weatherReturn = await axios.get(`${constants.openWeatherAPIUrl}lat=${currentCountryLocation.latitude}&lon=${currentCountryLocation.longitude}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
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
                <GoogleMaps defaultCenter={{ lat: 36.366717, lng: 138.743049 }} defaultZoom={4} showMarker={true} />
                <CitiesList cities={citiesList} />
            </div>


        </div>
    );
}