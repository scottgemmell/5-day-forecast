import React from "react";
import { Grid } from "react-bootstrap";
import { Controls } from "../components/";
const Forecasts = React.lazy(() => import("../components/Forecasts"));

const AppContainer = () => (
	<div className="app">
		<Controls />
		<Grid>
			<React.Suspense fallback="Loading forecasts...">
				<Forecasts />
			</React.Suspense>
		</Grid>
	</div>
);

export default AppContainer;
