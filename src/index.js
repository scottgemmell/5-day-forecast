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
import { notificationReducer } from "./redux/reducers/notification.reducer";
import { normalizeMiddleware } from "./redux/middleware/normalize.middleware";


const logger = createLogger({
	// ...options
	collapsed: true,
	diff: true,
});

const composeEnhancers = composeWithDevTools({
	// Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// shape the state structure
const rootReducer = combineReducers({
	forecasts: forecastsReducer,
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

const store = createStore(
	rootReducer, /* preloadedState, */ 
	composeEnhancers(
		applyMiddleware(
			thunk, 
			...featureMiddleware, ...coreMiddleware, normalizeMiddleware,
			logger,
		)
	)
);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
	<Provider 
		store={store}
	>
		<AppContainer />
	</Provider>
);