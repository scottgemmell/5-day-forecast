import { FORECASTS, FETCH_FORECASTS, setForecasts } from "../actions/forecasts.actions.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api.actions";

function getForecastsUrl(){
	return `https://api.openweathermap.org/data/2.5/forecast?q=Aberdeen,UK&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3`; 
}

export const forecastsMiddleware = () => (next) => (action) => {
	next(action);

	switch(action.type) {
	
	case FETCH_FORECASTS:
		next(apiRequest({ 
			body: null, 
			method: "GET", 
			url: getForecastsUrl(), 
			feature: FORECASTS })
		);
		break;
	
	case `${FORECASTS} ${API_SUCCESS}`:
		next(setForecasts({ forecasts: action.payload }));
		break;

	case `${FORECASTS} ${API_ERROR}`:
		next(setForecasts({ forecasts: action.payload }));
		break;

	default:
		break;
	}
};