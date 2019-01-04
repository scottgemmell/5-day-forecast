export const SET_NOTIFICATION = "SET_NOTIFICATION";

export const setNotification = ({ message, feature }) => ({
	type: SET_NOTIFICATION,
	payload: message,
	meta: { feature }
});