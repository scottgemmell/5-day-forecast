import React from "react";
import { useSelector } from "react-redux";
import { Alert, Grid } from "react-bootstrap";
import { Controls, Forecasts } from "../components/";

const AppContainer = () => {
	const notification = useSelector(state => state.notification);

	return (
		<div className="app">
			<Controls />
			<Grid>
				{(notification.message === "") 
					? <Forecasts />
					: <div>
						<h2 className="section-title">Error :(</h2>
						<Alert bsStyle="danger" bsClass="c-controls__alert alert">
							Invalid <strong>City</strong> and/or <strong>Country</strong>. [{notification.message}]
						</Alert>
					</div>}
			</Grid>
		</div>
	);
};

export default AppContainer;
