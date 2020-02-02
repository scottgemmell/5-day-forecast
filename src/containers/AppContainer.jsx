import React from "react";
import { Grid } from "react-bootstrap";
import { Controls } from "../components/";
import ErrorBoundary from "../ErrorBoundary";
const Forecasts = React.lazy(() => Promise.reject());
//const Forecasts = React.lazy(() => import("../components/Forecasts"));

const AppContainer = () => (
	
		<div className="app">
			<Controls />
			<Grid>
				<ErrorBoundary fallback="Nae weather reports today...">
					<React.Suspense fallback="Loading forecasts...">
						<Forecasts />
					</React.Suspense>
				</ErrorBoundary>
			</Grid>
		</div>
	
);

export default AppContainer;
