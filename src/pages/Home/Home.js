import React, { useState } from 'react'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import axios from 'axios'

import CitiesList from '../../components/CitiesList/CitiesList'

import constants from '../../constants'


import './Home.css'

export default function Home() {

    let [pin, setPin] = useState({})

    async function handleSearchForWeather() {
        console.log("Request URL: " + `${constants.openWeatherAPIUrl}lat=${pin.lat}&lon=${pin.lng}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
        const weatherReturn = await axios.get(`${constants.openWeatherAPIUrl}lat=${pin.lat}&lon=${pin.lng}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
        console.log(weatherReturn)
    }

    function updateMarker(pin) {
        setPin(pin)
        console.log("Home -> Updated!")
        console.log(pin)
    }

    return (
        <div className="home-container">
            <div className="home-title">
                <span>Please, select a location and click on "Search" to see their weather</span>
                <div onClick={handleSearchForWeather}>Search</div>
            </div>

            <GoogleMaps updateMarker={updateMarker} />

            <CitiesList cities={} />

        </div>
    );
}