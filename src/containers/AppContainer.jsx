import React, { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { Controls } from "../components/";
import ErrorBoundary from "../ErrorBoundary";
import spinner from "../assets/svgs/spinner.svg";

//const Forecasts = React.lazy(() => Promise.reject());
const Forecasts = lazy(() => import("../components/Forecasts"));

const Spinner = () => {
	return (<div className="u-spinner">
		<img src={spinner} alt="Loading..." />
	</div>);
}

export const AppContainer = () => (
	<div className="app">
		<Controls />
		<Container>
			<ErrorBoundary fallback="Nae weather reports today...">
				<Suspense fallback={<Spinner />}>
					<Forecasts />
				</Suspense>
			</ErrorBoundary>
		</Container>
	</div>
);

export default AppContainer;
