import React, { useRef, useEffect } from "react";
import { Grid } from "react-bootstrap";
//import { Controls } from "../components/";
import { useDispatch } from "react-redux";
import { fetchForecasts } from "../redux/actions/forecasts.actions";
import ErrorBoundary from "../ErrorBoundary";
import spinner from "../assets/svgs/spinner.svg";

//const Forecasts = React.lazy(() => Promise.reject());
const Forecasts = React.lazy(() => import("../components/Forecasts"));

const Spinner = () => {
	return (<div className="u-spinner">
		<img src={spinner} alt="Loading..." />
	</div>);
}

export const AppContainer = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchForecasts());
	}, []);

	return (
	
		<div className="app">
			{/* <Controls /> */}
			<Grid>
				<ErrorBoundary fallback="Nae weather reports today...">
					<React.Suspense fallback={<Spinner />}>
						<Forecasts />
					</React.Suspense>
				</ErrorBoundary>
			</Grid>
		</div>
	
);
	}

export default AppContainer;
