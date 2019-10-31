import React from "react";
import { useSelector } from "react-redux";
import spinner from "../assets/svgs/spinner.svg";

import * as R from "ramda";
import ForecastDaily from "./ForecastDaily";

export const Forecasts = () => {
	
	const loading = useSelector(state => state.loading);
	const forecasts = useSelector(state => state.forecasts);
	const list = useSelector(state => state.forecasts.list);

	if (R.isEmpty(forecasts)) {
		return (<div></div>);
	}

	if (loading === true) {
		return (<div className="u-spinner">
			<img src={spinner} alt="Loading..." />
		</div>);
	}

	return (
		<section>
			<h2 className="section-title">
				Forecasts <em>for</em> {forecasts.city.name}
			</h2>
			<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
				{list.map((item, i) => (<ForecastDaily {...item} key={i} />))}
			</div>
		</section>
	);
};

export default Forecasts;