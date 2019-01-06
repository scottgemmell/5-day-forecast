import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { getForecastData } from "../redux/actions";
import { fetchForecasts } from "../redux/actions/forecasts.actions";
import { Grid } from "react-bootstrap";
import Controls from "../components/Controls.jsx";
import Forecasts from "../components/Forecasts.jsx";

class AppContainer extends Component {

	// componentDidMount(){

	// }

	getForecasts = (e) => {
		e.preventDefault();
		const { fetchForecasts } = this.props;
		fetchForecasts({payload: "https://api.openweathermap.org/data/2.5/forecast?q=Glasgow,UK&units=metric&appid=e9d4c67ad81c4d73f2ad231f6092f6c3"});
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
	data: PropTypes.object,
};

const mapStateToProps = (state) => ({
	data: state.forecasts,
});

export default connect(
	mapStateToProps,
	{
		fetchForecasts,
	},
)(AppContainer);
