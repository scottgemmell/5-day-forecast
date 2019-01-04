import { FORECASTS, FETCH_FORECASTS, setForecasts } from "../actions/forecasts.js";
import { API_ERROR, apiRequest, API_SUCCESS } from "../actions/api";
import { setLoader } from "../actions/ui";
import { setNotification } from "../actions/notifications.js";

const FORECASTS_URL = "https://api.openweathermap.org/data/2.5/forecast?q=Glasgow,UK&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3"; 

export const forecastsMiddleware = () => (next) => (action) => {
	next(action);

	switch(action.type) {
	
	case FETCH_FORECASTS:
		next(apiRequest({ body: null, method: "GET", url: FORECASTS_URL, feature: FORECASTS }));
		next(setLoader({ state: true, feature: FORECASTS }));
		break;
	
	case `${FORECASTS} ${API_SUCCESS}`:
		next(setForecasts({ forecasts: action.payload.items }));
		next(setLoader({ state: false, feature: FORECASTS }));
		break;

	case `${FORECASTS} ${API_ERROR}`:
		next(setNotification({ message: action.payload.message, feature: FORECASTS }));
		next(setLoader({ state: false, feature: FORECASTS }));
	}
}