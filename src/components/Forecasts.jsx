import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

import * as R from "ramda";
import ForecastDaily from "./ForecastDaily";

export const Forecasts = () => {
	const forecasts = useSelector(state => state.forecasts);
	const list = useSelector(state => state.forecasts.list);
	const notification = useSelector(state => state.notification);

	

	if (R.isEmpty(forecasts)) {
		return (<div></div>);
	}

	return (
		<section>		
			{(notification.message === "") 
				? 
				<div>
					<h2 className="section-title">
						Forecasts <em>for</em> {forecasts.city.name}
					</h2>
					<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
						{list.map((item, i) => (<ForecastDaily {...item} key={i} />))}
					</div>
				</div>
				: 
				<div>
					<h2 className="section-title">
						Error :(
					</h2>
					<Alert bsStyle="danger" bsClass="c-controls__alert alert">
						Invalid <strong>City</strong> and/or <strong>Country</strong>. [{notification.message}]
					</Alert>
				</div>}
		</section>
	);
};

export default Forecasts;