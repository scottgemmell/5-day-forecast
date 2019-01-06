import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { 
	createStore, 
	applyMiddleware,
	combineReducers,
} from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import "./assets/scss/master.scss";
import AppContainer from "./containers/AppContainer";

import { forecastsReducer } from "./redux/reducers/forecasts.reducer";
import { forecastsMiddleware } from "./redux/middleware/forecasts.middleware";
import { apiMiddleware } from "./redux/middleware/api.middleware";
import { uiReducer } from "./redux/reducers/ui.reducer";
import { notificationReducer } from "./redux/reducers/notification.reducer";


const logger = createLogger({
	// ...options
	collapsed: true,
	diff: true,
});

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

//
// shape the state structure
const rootReducer = combineReducers({
	forecasts: forecastsReducer,
	ui: uiReducer,
	notification: notificationReducer
});

// create the feature middleware array
const featureMiddleware = [
	forecastsMiddleware
];

// create the core middleware array
const coreMiddleware = [
	apiMiddleware
];
//

const store = createStore(
	rootReducer, /* preloadedState, */ 
	composeEnhancers(
		applyMiddleware(
			thunk, 
			...featureMiddleware, ...coreMiddleware,
			logger,
		),
		// other store enhancers if any
	)
);

ReactDOM.render(
	<Provider 
		store={store}
	>
		<AppContainer />
	</Provider>, 
	document.getElementById("root")
);