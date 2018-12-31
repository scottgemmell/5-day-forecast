import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { 
    createStore, 
    applyMiddleware
} from "redux";
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import reducers from "./reducers";
import "./assets/scss/master.scss";
import AppContainer from "./containers/AppContainer";

const logger = createLogger({
	// ...options
	collapsed: true,
	diff: true,
});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
    reducers, 
    /* preloadedState, */ 
    composeEnhancers(
        applyMiddleware(thunk, logger),
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