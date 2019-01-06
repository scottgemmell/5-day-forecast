import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import spinner from "../assets/svgs/spinner.svg";
import { Col } from "react-bootstrap";
import { toDayOfTheWeek, getTempStatus } from "../utils/helper.js";
import cloudyDay from "../assets/svgs/vendor/amcharts/animated/cloudy.svg";
import rainyDay from "../assets/svgs/vendor/amcharts/animated/rainy-5.svg";
import sunnyDay from "../assets/svgs/vendor/amcharts/animated/day.svg";
import clearDay from "../assets/svgs/vendor/amcharts/animated/thunder.svg";
import snowyDay from "../assets/svgs/vendor/amcharts/animated/snowy-6.svg";
import * as R from "ramda";

export class Forecasts extends Component {

	constructor(props){
		super(props);
		this.filterByDays = this.filterByDays.bind(this);
	}

	filterByDays = list => {
		return (
			list.filter((_k, v) => {
				return (v % 8 === 0) ? true : false;
			})
		);
	};

	render() {
		const { forecasts, forecasts: { city }, forecasts: { list }, loading } = this.props;

		// const { id } = city;
		// console.log("city", city);
		// console.log("id", id);

		if (R.isEmpty(forecasts)) {
			return <div></div>;
		}

		if (loading === true) {
			return <div className="u-spinner"><img src={spinner} alt="Loading..." /></div>;
		}

		const filteredList = this.filterByDays(list);

		return (
			<section>
				<h2 className="section-title">
					Forecasts <em>for</em> {this.props.forecasts.city.name}
				</h2>
				<div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
					{filteredList
						.map((item, i) => {

							const { dt_txt, weather, main: { temp } } = item;

							return (
								<div key={i} className="c-day day@small day@medium">
									<Col xs={6} className="c-day__body">
										<dl>
											<dt>
												Day:
											</dt>
											<dd>
												{toDayOfTheWeek(dt_txt)}
											</dd>
											<dt>
												Weather:
											</dt>
											<dd>
												{weather[0].main === "Clear" && <div>Clear <br/><small className="notice">! No weather icon for clear so using thunder</small></div>}
												{weather[0].main !== "Clear" && <div>{weather[0].main}</div>}
											</dd>
											<dt>
												Description:
											</dt>
											<dd>
												{weather[0].description}
											</dd>
											<dt>
												Temperature:
											</dt>
											<dd>
												<span className={`a-temp a-temp--${getTempStatus(temp)}`}>{temp}&deg;</span>
											</dd>
										</dl>
									</Col>
									<Col xs={6} className="c-day__head">
										{weather[0].main === "Rain" && <div>
											<img src={rainyDay} alt="Rain" />
										</div>}
										{weather[0].main === "Clouds" && <div>
											<img src={cloudyDay} alt="Clouds" />
										</div>}
										{weather[0].main === "Clear" && <div>
											<img src={clearDay} alt="Clear" />
										</div>}
										{weather[0].main === "Sunny" && <div>
											<img src={sunnyDay} alt="Sunny" />
										</div>}
										{weather[0].main === "Snowy" && <div>
											<img src={snowyDay} alt="Snowy" />
										</div>}
									</Col>
								</div>
							);
						})}
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