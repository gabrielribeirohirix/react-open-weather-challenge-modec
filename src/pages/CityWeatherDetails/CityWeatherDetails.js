import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Select from 'react-select'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'

import constants from '../../constants'

import './CityWeatherDetails.css'

export default function CityWeatherDetails() {

    const location = useLocation()
    const city = JSON.parse(location.state.city)

    let [selectedMeasure, setSelectedMeasure] = useState("celsius")

    function handleOnChangeMeasure(selected) {
        setSelectedMeasure(selected.value)
    }

    function calculateTemperature(measure, value) {

        switch (measure) {

            case "celsius":
                return ((value - 273.15) < 0 ? 0 : value - 273.15).toFixed(2) + '°C'

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
                <span className="city-weather-title">{`${city.name}, ${city.sys.country}`}</span>
                <img alt="city" src={city.sys.country ? `https://www.countryflags.io/${city.sys.country}/shiny/64.png` : constants.defaultFlagImage} />
            </div>

            <Select className="measure-combobox"
                options={constants.temperatureConversionArray}
                defaultValue={constants.temperatureConversionArray[0]}
                onChange={handleOnChangeMeasure} />

            <div className="city-weather-body">

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Humidity</span>
                        <span>{city.main.humidity}%</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Pressure</span>
                        <span>{city.main.pressure} hPa</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Clouds</span>
                        <span>{city.clouds.all}%</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Wind Speed</span>
                        <span>{city.wind.speed} Km/h</span>
                    </div>
                </div>

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, city.main.temp)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Feels Like</span>
                        <span>{calculateTemperature(selectedMeasure, city.main.feels_like)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Min. Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, city.main.temp_min)}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Max. Temperature</span>
                        <span>{calculateTemperature(selectedMeasure, city.main.temp_max)}</span>
                    </div>
                </div>

                <div className="weather-card">

                    <div className="weather-card-field">
                        <span>Weather</span>
                        <span>{city.weather[0].main}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Description</span>
                        <span>{city.weather[0].description}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Coordinates</span>
                        <span>{`${city.coord.lat}, ${city.coord.lon}`}</span>
                    </div>
                </div>
            </div>

            <GoogleMaps defaultCenter={{ lat: city.coord.lat, lng: city.coord.lon }} defaultZoom={6} showMarker={true} pin={{ lat: city.coord.lat, lng: city.coord.lon, countryCode: city.sys.country }} />

        </div>
    )

}