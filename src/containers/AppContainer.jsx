import React, { lazy, Suspense, useState } from "react";
import { Container } from "react-bootstrap";
import { Controls } from "../components/";
import ErrorBoundary from "../ErrorBoundary";
import spinner from "../assets/svgs/spinner.svg";
import createResource from "../resource";

//const Forecasts = React.lazy(() => Promise.reject());
const Forecasts = lazy(() => import("../components/Forecasts"));

const Spinner = () => {
	return (<div className="u-spinner">
		<img src={spinner} alt="Loading..." />
	</div>);
}

const resource = createResource();

export const AppContainer = () => {
	
	//const [city, setCity] = useState("Aberdeen");

	return (
		<div className="app">
			<Controls />
			<Container>
				<ErrorBoundary fallback="Nae weather reports today...">
					<Suspense fallback={<Spinner />}>
						<Forecasts 
							//city={city} 
							resource={resource} 
						/>
					</Suspense>
				</ErrorBoundary>
			</Container>
		</div>
	)
};

export default AppContainer;
