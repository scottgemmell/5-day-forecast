import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";
import spinner from "../assets/svgs/spinner.svg";

import * as R from "ramda";
import ForecastDaily from "./ForecastDaily";

export class Forecasts extends Component {

	render() {
		const { forecasts, forecasts: { list }, loading } = this.props;

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
					Forecasts <em>for</em> {this.props.forecasts.city.name}
				</h2>
				<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
					{list.map((item, i) => (<ForecastDaily {...item} key={i} />))}
				</div>
			</section>
		);
	}
}

Forecasts.defaultProps = {
	forecasts: {
		list: "",
		city: {
			name: "",
		}
	}
};

Forecasts.propTypes = {
	forecasts: PropTypes.shape({
		list: PropTypes.arrayOf(
			PropTypes.shape({
				dt_txt: PropTypes.string.isRequired,
				weather: PropTypes.arrayOf(
					PropTypes.shape({
						main: PropTypes.string.isRequired,
						description: PropTypes.string.isRequired,
					})
				).isRequired,
				main: PropTypes.shape({
					temp: PropTypes.string.number,
				}),
			}).isRequired,
			
		),
		city: PropTypes.shape({
			name: PropTypes.string.isRequired,
		}),
	}),
	loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	forecasts: state.forecasts,
	// forecastsFailure: state.forecastsFailure,
	// forecastsLoading: state.forecastsLoading
	loading: state.ui.loading,
});

export default connect(
	mapStateToProps,
)(Forecasts);