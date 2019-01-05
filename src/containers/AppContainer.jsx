import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getForecastData } from "../redux/actions";
import { Grid } from "react-bootstrap";
import Controls from "../components/Controls.jsx";
import Forecasts from "../components/Forecasts.jsx";

class AppContainer extends Component {

	getForecasts = (e) => {
		e.preventDefault();
		const { getForecastData } = this.props;
		getForecastData();
	}
    
	render() {
		const { data } = this.props;

		return (
			<div className="app">
				<Controls 
					handleSubmit={this.getForecasts}
				/>
				<Grid>
					{(data !== "") && <Forecasts />}
				</Grid>
			</div>
		);
	}
}

AppContainer.propTypes = {
	getForecastData: PropTypes.func,
	data: PropTypes.object,
};

const mapStateToProps = (state) => ({
	data: state.forecasts.data,
});

export default connect(
	mapStateToProps,
	{
		getForecastData,
	},
)(AppContainer);
