import React, { useState } from 'react'
import axios from 'axios'
import sweetAlert from '@sweetalert/with-react'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import CitiesList from '../../components/CitiesList/CitiesList'

import constants from '../../constants'
import { isObjectEmpty } from '../../utils/variableValidations'
import { useSelector, useDispatch } from 'react-redux'

import { addCitiesList } from '../../store/Country/Country.actions'

import './Home.css'

export default function Home() {

    const dispatch = useDispatch()
    let citiesList = useSelector(({ countryReducer }) => countryReducer.currentCountry.citiesList)
    const currentCountry = useSelector(({ countryReducer }) => countryReducer.currentCountry)

    async function handleSearchForWeather() {

        let weatherReturn = {}
        try {
            weatherReturn = await axios.get(`${constants.openWeatherAPIUrl}lat=${currentCountry.countryLocation.latitude}&lon=${currentCountry.countryLocation.longitude}&cnt=15&APPID=${constants.openWeatherAPIKey}`)
            dispatch(addCitiesList(weatherReturn.data.list))
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
                    defaultCenter={constants.defaultLatLong}
                    defaultZoom={4}
                    showMarker={true}
                    pin={isObjectEmpty(currentCountry.currentCity) ? null : { lat: currentCountry.currentCity.coord.lat, lng: currentCountry.currentCity.coord.lon, countryCode: currentCountry.countryCode }} />
                <CitiesList cities={citiesList} />
            </div>


        </div>
    );
}