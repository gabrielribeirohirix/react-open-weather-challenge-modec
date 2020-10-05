import React from 'react'
import { useNavigate } from 'react-router-dom'

import backgroundVideo from '../../assets/videos/clouds_video.mp4'
import './Login.css'

export default function Login() {

    const onNavigate = useNavigate()

    return (
        <div className="login-container">
            <video src={backgroundVideo}
                className="background-video-login"
                loop
                autoPlay
                muted/>
            <div className="title-container" />
            <span className="login-title">Hello! Be welcome to my OpenWeather Challenge!</span>
            <div onClick={() => onNavigate("/Home")} className="get-started-button">
                <span>Get Started</span>
            </div>

        </div>
    );
}