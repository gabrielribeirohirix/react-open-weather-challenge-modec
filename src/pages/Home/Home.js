import React, { useState } from 'react'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import axios from 'axios'

import CitiesList from '../../components/CitiesList/CitiesList'

import constants from '../../constants'


import './Home.css'

export default function Home() {

    let [pin, setPin] = useState({})
    let [citiesList, setCitiesList] = useState([])

    async function handleSearchForWeather() {
        const weatherReturn = await axios.get(`${constants.openWeatherAPIUrl}lat=${pin.lat}&lon=${pin.lng}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
        console.log(weatherReturn)
        setCitiesList(weatherReturn.data.list)
    }

    function updateMarker(pin) {
        setPin(pin)
    }

    return (
        <div className="home-container">
            <div className="home-title">
                <div className="home-title-span">
                    <span>Please, select a location and click on "Search" to see their weather</span>
                </div>
                <div className="home-title-button">
                    <div onClick={handleSearchForWeather}>Search</div>
                </div>
            </div>
            <div className="home-body">
                <GoogleMaps defaultCenter={{ lat: 36.366717, lng: 138.743049 }} defaultZoom={4} updateMarker={updateMarker} />
                <CitiesList cities={citiesList} />
            </div>


        </div>
    );
}