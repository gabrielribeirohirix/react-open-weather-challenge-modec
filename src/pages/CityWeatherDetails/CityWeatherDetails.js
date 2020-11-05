import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'

import constants from '../../constants'

import './CityWeatherDetails.css'

export default function CityWeatherDetails() {

    const currentCountry = useSelector(({ countryReducer }) => countryReducer.currentCountry)
    
    let [selectedMeasure, setSelectedMeasure] = useState("celsius")

    function handleOnChangeMeasure(selected) {
        setSelectedMeasure(selected.value)
    }

    function calculateTemperature(measure, value) {

        switch (measure) {

            case "celsius":
                return (value - 273.15).toFixed(2) + '°C'

            case "kelvin":
                return value.toFixed(2) + 'K'

            case "fahrenheit":
                return ((value - 273.15) * 9 / 5 + 32).toFixed(2) + '°F'

            default:
                return value.toFixed(2)
        }

    }

    return (
        <div className="city-weather">

            <div className="city-weather-title-container">
                <span className="city-weather-title">{`${currentCountry.currentCity.name}, ${currentCountry.countryName} (${currentCountry.currentCity.sys.country})`}</span>
                <img alt="city" src={currentCountry.currentCity.sys.country ? `https://www.countryflags.io/${currentCountry.currentCity.sys.country}/shiny/64.png` : constants.defaultFlagImage} />
            </div>

            <Select className="measure-combobox"
                options={constants.temperatureConversionArray}
                defaultValue={constants.temperatureConversionArray[0]}
                onChange={handleOnChangeMeasure} />

            <div className="city-weather-body">

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Humidity</span>
                        <span>{currentCountry.currentCity.main.humidity}%</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Pressure</span>
                        <span>{currentCountry.currentCity.main.pressure} hPa</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Clouds</span>
                        <span>{currentCountry.currentCity.clouds.all}%</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Wind Speed</span>
                        <span>{currentCountry.currentCity.wind.speed} Km/h</span>
                    </div>
                </div>

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, currentCountry.currentCity.main.temp)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Feels Like</span>
                        <span>{calculateTemperature(selectedMeasure, currentCountry.currentCity.main.feels_like)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Min. Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, currentCountry.currentCity.main.temp_min)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Max. Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, currentCountry.currentCity.main.temp_max)}</span>
                    </div>
                </div>

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Weather</span>
                        <span>{currentCountry.currentCity.weather[0].main}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Description</span>
                        <span>{currentCountry.currentCity.weather[0].description}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Coordinates</span>
                        <span>{`${currentCountry.currentCity.coord.lat}, ${currentCountry.currentCity.coord.lon}`}</span>
                    </div>
                </div>
            </div>

            <div className="city-weather-details-map">
                <GoogleMaps
                    defaultCenter={{ lat: currentCountry.currentCity.coord.lat, lng: currentCountry.currentCity.coord.lon }}
                    defaultZoom={6}
                    showMarker={true}
                    dynamicStatus={false}
                    pin={{ lat: currentCountry.currentCity.coord.lat, lng: currentCountry.currentCity.coord.lon, countryCode: currentCountry.currentCity.sys.country }} />
            </div>
        </div>
    )

}