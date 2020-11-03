import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import constants from '../../constants'
import { addCountryFlag } from '../../store/Country/Country.actions'

import './Marker.css'

export default function Market() {

    const dispatch = useDispatch()
    const currentCountry = useSelector(({ countryReducer }) => countryReducer.currentCountry)

    const countryFlagUrl = currentCountry.countryCode ? `${constants.countryFlagsUrl + currentCountry.countryCode}/shiny/64.png` : constants.defaultFlagImage

    console.log("Test")

    useEffect(() => {
        dispatch(addCountryFlag(countryFlagUrl))
    }, [])


    return (
        <>
            <div className="marker-container">
                <img className="marker-img" alt="country" src={countryFlagUrl} />
            </div>
            <div className="ballon-point"></div>
        </>
    )

}