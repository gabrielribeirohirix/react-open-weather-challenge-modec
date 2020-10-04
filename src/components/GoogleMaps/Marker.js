import React, { useEffect } from 'react'
import constants from '../../constants'

import './Marker.css'

export default function Market(props) {

    const propsOne = props

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <>
            <div className="marker-container">
                <img className="marker-img" src={ props.countryCode ? `https://www.countryflags.io/${props.countryCode}/shiny/64.png` : constants.defaultFlagImage} />
            </div>
            <div className="ballon-point"></div>
        </>
    );

}