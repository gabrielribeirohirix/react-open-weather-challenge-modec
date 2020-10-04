import React from 'react'
import { useLocation } from 'react-router-dom'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import './CityWeatherDetails.css'

export default function CityWeatherDetails() {

    const location = useLocation()
    const city = JSON.parse(location.state.city)
    return (
        <div className="city-weather">
            <span className="city-weather-title">{`${city.name}, ${city.sys.country}`}</span>

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
                        <span>{city.main.temp}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Feels Like</span>
                        <span>{city.main.feels_like}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Min. Temperature</span>
                        <span>{city.main.temp_min}</span>
                    </div>

                    <div className="weather-card-field">
                        <span>Max. Temperature</span>
                        <span>{city.main.temp_max}</span>
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

            <GoogleMaps defaultCenter={{ lat: city.coord.lat, lng: city.coord.lon }} defaultZoom={6}/>

        </div>
    )

}