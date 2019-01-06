import { FORECASTS, FETCH_FORECASTS, setForecasts } from "../actions/forecasts.actions.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api.actions";
import { setLoader } from "../actions/ui.actions";
import { setNotification } from "../actions/notifications.actions.js";

function getForecastsUrl({city, country}){
	return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3`; 
}

export const forecastsMiddleware = () => (next) => (action) => {
	next(action);

	switch(action.type) {
	
	case FETCH_FORECASTS:
		next(apiRequest({ 
			body: null, 
			method: "GET", 
			url: getForecastsUrl({
				city: action.payload.city, 
				country: action.payload.country
			}), 
			feature: FORECASTS })
		);
		next(setLoader({ state: true, feature: FORECASTS }));
		break;
	
	case `${FORECASTS} ${API_SUCCESS}`:
		next(setForecasts({ forecasts: action.payload }));
		next(setLoader({ state: false, feature: FORECASTS }));
		break;

	case `${FORECASTS} ${API_ERROR}`:
		next(setNotification({ message: action.payload.message, feature: FORECASTS }));
		next(setLoader({ state: false, feature: FORECASTS }));
		break;

	default:
		break;
	}
};