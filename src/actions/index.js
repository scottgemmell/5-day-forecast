import { 
	API_KEY,
	CITY_UPDATED, 
	COUNTRY_UPDATED, 
	RESET,
	SET_OPEN_DATA,
    FORECASTS_SUCCESS,
} from "../constants";

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

export function forecastsFailure(bool) {
    return {
        type: 'FORECASTS_FAILURE',
        failure: bool
    };
}

export function forecastsLoading(bool) {
    return {
        type: 'FORECASTS_LOADING',
        loading: bool
    };
}

export function forecastsSuccess(forecasts) {
    return {
        type: FORECASTS_SUCCESS,
        forecasts
    };
}

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

// export function getForecastData({city, country}) {
//     return (dispatch) => {
// 		dispatch(forecastsLoading(true));

//         fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${API_KEY}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw Error(response.statusText);
//                     //
//                 }
//                 dispatch(forecastsLoading(false));
//                 dispatch(forecastsFailure(false));
//                 return response;
//             })
//             .then((response) => response.json())
//             .then((forecasts) => dispatch(forecastsSuccess(forecasts)))
//             .catch(
//                 () => { 
//                     //dispatch(forecastsLoading(false));
//                     dispatch(forecastsFailure(true));
//                 }
//             );
//     };
// }

