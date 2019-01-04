import { 
	API_KEY,
	CITY_UPDATED, 
	COUNTRY_UPDATED, 
	RESET,
	SET_OPEN_DATA,
	FORECASTS_SUCCESS,
	FORECASTS_FAILURE,
	FORECASTS_LOADING,
} from "../../constants";

export const cityUpdated = city => ({
	type: CITY_UPDATED,
	payload: city
});

export const countryUpdated = country => ({
	type: COUNTRY_UPDATED,
	payload: country
});

export const reset = () => ({
	type: RESET
});

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

export const getForecastData = ({city, country}) => (dispatch) => {
	dispatch(forecastsLoading(true));

	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`)
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