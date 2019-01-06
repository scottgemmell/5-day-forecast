export const FORECASTS = "[FORECASTS]";
export const FETCH_FORECASTS = `${FORECASTS} FETCH`;
export const SET_FORECASTS = `${FORECASTS} SET`;

export const fetchForecasts = (
	//{ query }
	) => ({
	type: FETCH_FORECASTS,
	//payload: query
});

export const setForecasts = ({ forecasts }) => ({
	type: SET_FORECASTS,
	payload: forecasts
});
