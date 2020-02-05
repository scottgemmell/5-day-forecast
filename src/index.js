import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import "./assets/scss/master.scss";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
	<AppContainer />
);