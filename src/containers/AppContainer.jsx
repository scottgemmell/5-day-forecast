import React from "react";
import { Grid } from "react-bootstrap";
import { Controls, Forecasts } from "../components/";

const AppContainer = () => (
	<div className="app">
		<Controls />
		<Grid>
			<Forecasts />
		</Grid>
	</div>
);

export default AppContainer;
