import { combineReducers } from "redux";
import { 
	CITY_UPDATED, 
	COUNTRY_UPDATED, 
	RESET,
    FORECASTS_SUCCESS,
    FORECASTS_FAILURE,
    FORECASTS_LOADING,
} from "../constants";
import defaultState from "../store/initialStates.json";

const setForecastsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CITY_UPDATED:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case COUNTRY_UPDATED:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case RESET: 
            return {
                ...state,
                city: "",
                country: "",
                data: "",
            };
        case FORECASTS_SUCCESS:
            return {
                ...state,
                data: action.forecasts,
            };
        default:
            return state;
	}
};

export function forecastsFailure(state = false, action) {
    switch (action.type) {
        case FORECASTS_FAILURE:
            return action.failure;
        default:
            return state;
    }
}

export function forecastsLoading(state = false, action) {
    switch (action.type) {
        case FORECASTS_LOADING:
            return action.loading;

        default:
            return state;
    }
}

export default combineReducers({
	forecasts: setForecastsReducer,
    forecastsFailure,
    forecastsLoading,
});
