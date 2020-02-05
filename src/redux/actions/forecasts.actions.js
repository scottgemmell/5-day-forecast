export const FORECASTS = "[Forecasts]";
export const FETCH_FORECASTS = `${FORECASTS} FETCH`;
export const SET_FORECASTS = `${FORECASTS} SET`;

export const fetchForecasts = () => ({
	type: FETCH_FORECASTS
});

export const setForecasts = ({ forecasts }) => ({
	type: SET_FORECASTS,
	payload: forecasts,
	meta: {
		normalizeKey: true,
		feature: "Forecasts"
	}
});
