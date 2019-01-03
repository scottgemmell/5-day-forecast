import { SET_FORECASTS } from "../actions/forecasts.js";

const initState = []; // {}

export const forecastsReducer = (forecasts = initState, action) => {
	switch(action.type) {

	case SET_FORECASTS:
		return action.payload;
	default:
		return forecasts;
	}
};
