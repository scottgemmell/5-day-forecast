import { API_REQUEST, apiSuccess, apiError} from "../actions/api.actions";

export const apiMiddleware = ({ dispatch }) => next => action => {
	next(action); 

	if(action.type.includes(API_REQUEST)) {
		const { url, method, feature } = action.meta;
		
		fetch(url, { method })
			.then( response => {
				// if (!response.ok) {
				// 	throw Error(response.statusText);
				// }
				// return response;
				if (response.status >= 200 && response.status < 300) {
					return response
				} else {
					throw Error({
						message: response.statusText, 
						status: response.status
					});
				}
			})
			.then( response => response.json())
			.then( data => dispatch(apiSuccess(data, feature)))
			.catch( error => dispatch(apiError(error, feature)));
	} 
};