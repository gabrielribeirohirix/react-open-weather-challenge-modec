import constants from "../../constants"

const INITIAL_STATE = {
    currentCountry: {
        countryName: "",
        countryCode: "",
        countryFlag: constants.defaultFlagImage,
        countryLocation: {
            latitude: 0,
            longitude: 0
        },
        currentCity: ""

    },
    currentProduct: {
        productName: "",
        productValue: 0
    }
}


export default function currentCountryReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case "ADD_COUNTRY_CODE":
            return { ...state, currentCountry: { ...state.currentCountry, countryCode: action.payload } }
        case "ADD_COUNTRY_NAME":
            return { ...state, currentCountry: { ...state.currentCountry, countryName: action.payload } }
        case "ADD_COUNTRY_LOCATION":
            return { ...state, currentCountry: { ...state.currentCountry, countryLocation: action.payload } }
        case "ADD_COUNTRY_FLAG_URL":
            return { ...state, currentCountry: { ...state.currentCountry, countryFlag: action.payload } }

        default:
            return state
    }

}
