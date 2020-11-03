import { createStore, combineReducers } from 'redux'
import countryReducer from "../store/Country/Country.reducer"


const rootReducer = combineReducers({
    countryReducer
})

const store = createStore(rootReducer)

export default store