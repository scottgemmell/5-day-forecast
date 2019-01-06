import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import { getForecastData } from "../redux/actions";
import { Grid } from "react-bootstrap";
import Controls from "../components/Controls.jsx";
import Forecasts from "../components/Forecasts.jsx";

class AppContainer extends Component {
	render() {
		const { data } = this.props;

		return (
			<div className="app">
				<Controls />
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
	mapStateToProps
)(AppContainer);
