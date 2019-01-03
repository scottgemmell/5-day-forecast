import { SET_LOADER } from "../actions/ui.js";

const initState = {
	loading: false
};

export const uiReducer = (state = initState, action) => {
	switch(true) {

	case action.type.includes(SET_LOADER):
		return { ...state, loading: action.payload };
	default:
		return state;
};