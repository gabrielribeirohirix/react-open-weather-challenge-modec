import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import CityWeatherDetails from './pages/CityWeatherDetails/CityWeatherDetails'

export default function PageRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/CityWeatherDetails" element={<CityWeatherDetails />}/>
        </Routes>
    );
}