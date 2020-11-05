import { saveStateInLocalStorage, loadStateFromLocalStorage, getInitialState } from '../../localStorage'

export default function currentCountryReducer(state = loadStateFromLocalStorage(), action) {

    switch (action.type) {

        case "ADD_COUNTRY_CODE":
            state = { ...state, currentCountry: { ...state.currentCountry, countryCode: action.payload } }
            break
        case "ADD_COUNTRY_NAME":
            state = { ...state, currentCountry: { ...state.currentCountry, countryName: action.payload } }
            break
        case "ADD_COUNTRY_LOCATION":
            state = { ...state, currentCountry: { ...state.currentCountry, countryLocation: action.payload } }
            break
        case "ADD_COUNTRY_FLAG_URL":
            state = { ...state, currentCountry: { ...state.currentCountry, countryFlag: action.payload } }
            break
        case "ADD_CITIES_LIST":
            state = { ...state, currentCountry: { ...state.currentCountry, citiesList: action.payload } }
            break
        case "ADD_SELECTED_CITY":
            state = { ...state, currentCountry: { ...state.currentCountry, currentCity: action.payload } }
            break
        case "USER_LOGOUT":
            state = getInitialState()
            break
        default:
            break
    }

    saveStateInLocalStorage(state)

    return state

}
