// import * as R from "ramda";
import { dataNormalized } from "../actions/normalize.actions";

const filterByDays = list => {
	return (
		list.filter((_k, v) => {
			return (v % 8 === 0) ? true : false;
		})
	);
};

export const normalizeMiddleware = ({ dispatch }) => next => action => {

	if(action.type.includes("SET") && action.meta.normalizeKey) {

		// notify about the transformation
		dispatch(dataNormalized({ feature: action.meta.feature }));

		const filteredList = Array.isArray(action.payload.list) && filterByDays(action.payload.list);

		// fire the books document action
		next({...action, payload: { ...action.payload, list: filteredList }, normalizeKey: null });

	} else {
		next(action);
	}
};