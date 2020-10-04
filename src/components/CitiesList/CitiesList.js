import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './CitiesList.css'

export default function CitiesList(props) {

    const navigate = useNavigate()

    return (
        <div className="cities-list-container">

            <span className="cities-list-title">See here the Cities found</span>

            <div className="cities-list-body">
                {props.cities ? props.cities.map((city, index) => (
                    <div key={`${city.name}-${index}`}
                        onClick={() => navigate("/CityWeatherDetails", { state: { city: JSON.stringify(city) } })}
                        className="cities-list-item">
                        <span>{city.name}</span>
                    </div>
                )) : <span>No Cities found at the moment</span>}
            </div>

        </div>
    )

}