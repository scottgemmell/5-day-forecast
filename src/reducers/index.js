import { combineReducers } from "redux";
import defaultState from "../store/initialStates.json";

const selectedCityReducer = (state = defaultState, action) => {
	console.log({state, action});
	if (action.type === "CITY_UPDATED") {
		return action.payload;
	}
	return state;
};

export default combineReducers({
    selectedCity: selectedCityReducer,
});