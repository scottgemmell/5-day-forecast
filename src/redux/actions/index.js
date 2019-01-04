import { 
	API_KEY,
	SET_OPEN_DATA,
	FORECASTS_SUCCESS,
	FORECASTS_FAILURE,
	FORECASTS_LOADING,
} from "../../constants";

export const setOpenData = data => ({
	type: SET_OPEN_DATA,
	payload: data
});

export const forecastsFailure = bool => ({
	type: FORECASTS_FAILURE,
	failure: bool
});

export const forecastsLoading = bool => ({
	type: FORECASTS_LOADING,
	loading: bool
});

export const forecastsSuccess = forecasts => ({ 
	type: FORECASTS_SUCCESS,
	forecasts
});

export const getForecastData = () => (dispatch) => {
	dispatch(forecastsLoading(true));

	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Glasgow,UK&units=metric&appid=${API_KEY}`)
		.then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			dispatch(forecastsLoading(false));
			dispatch(forecastsFailure(false));
			return response;
		})
		.then((response) => response.json())
		.then((forecasts) => dispatch(forecastsSuccess(forecasts)))
		.catch(
			() => {
				dispatch(forecastsFailure(true));
			}
		);
};