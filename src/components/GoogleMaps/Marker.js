import React from 'react'

import constants from '../../constants'

import './Marker.css'

export default function Market(props) {

    return (
        <>
            <div className="marker-container">
                <img className="marker-img" alt="country" src={ props.countryCode ? `https://www.countryflags.io/${props.countryCode}/shiny/64.png` : constants.defaultFlagImage} />
            </div>
            <div className="ballon-point"></div>
        </>
    );

}