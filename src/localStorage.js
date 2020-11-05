import { isUndefinedOrNull } from './utils/variableValidations'
import constants from './constants'

const INITIAL_STATE = {
    currentCountry: {
        countryName: "",
        countryCode: "",
        countryFlag: constants.defaultFlagImage,
        countryLocation: {
            latitude: constants.defaultLatLong.lat,
            longitude: constants.defaultLatLong.lng
        },
        currentCity: {}

    },
    currentProduct: {
        productName: "",
        productValue: 0
    }
}

export function getInitialState() {
    return INITIAL_STATE
}

export function loadStateFromLocalStorage() {

    try {

        const serializedState = localStorage.getItem("state")
        const stateFromLocalStorage = JSON.parse(serializedState)

        if (isUndefinedOrNull(stateFromLocalStorage)) {
            console.log("Local storage is empty, initializing state...")
            return INITIAL_STATE
        }

        return stateFromLocalStorage

    } catch (error) {

        console.error(`There was an error loading local storage. Error: ${error.getMessage()}`)
        return undefined

    }

}

export function saveStateInLocalStorage(updatedState) {

    try {

        const serializedState = JSON.stringify(updatedState)
        localStorage.setItem("state", serializedState)

    } catch (error) {

        console.log(`There was an error saving state into local storage. Error: ${error.getMessage()}`)

    }

}

export function clearLocalStorage() {

    try {
        localStorage.setItem("state", JSON.stringify(INITIAL_STATE))
        console.log("Local storage was clean.")
    } catch (error) {
        console.log(`There was an error cleaning local storage. Error: ${error.getMessage()}`)
    }

}