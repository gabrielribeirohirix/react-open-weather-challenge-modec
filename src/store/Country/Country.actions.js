export function addCountryFlag(countryFlagUrl) {
    return {
        type: "ADD_COUNTRY_FLAG_URL",
        payload: countryFlagUrl
    }
}

export function addCountryLocation(latitude, longitude) {
    return {
        type: "ADD_COUNTRY_LOCATION",
        payload: { latitude: latitude, longitude: longitude }
    }
}

export function addCountryCode(countryCode) {
    return {
        type: "ADD_COUNTRY_CODE",
        payload: countryCode
    }
}

export function addCountryName(countryName) {
    return {
        type: "ADD_COUNTRY_NAME",
        payload: countryName
    }
}

export function addSelectedCity(selectedCity) {
    return {
        type: "ADD_SELECTED_CITY",
        payload: selectedCity
    }
}

export function addCitiesList(citiesList) {
    return {
        type: "ADD_CITIES_LIST",
        payload: citiesList
    }
}