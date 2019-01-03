import SET_NOTIFICATION from "../actions/notifications.js";

const initState = [];

export const notificationReducer = (state = initState, action) => {
	switch(true) {
	
	case action.type.includes(SET_NOTIFICATION):
		return [ ...state, action.payload];
	
	default:
		return state;
	}
};