import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert, Grid } from "react-bootstrap";
import Controls from "../components/Controls.jsx";
import Forecasts from "../components/Forecasts.jsx";

class AppContainer extends Component {
	render() {
		const { notification } = this.props;

		return (
			<div className="app">
				<Controls />
				<Grid>
					{(notification.message === "") && <Forecasts />}
					{(notification.message !== "") && <div>
						<h2 className="section-title">Error :(</h2>
						<Alert bsStyle="danger" bsClass="c-controls__alert alert">
                            Invalid <strong>City</strong> and/or <strong>Country</strong>. [{notification.message}]
						</Alert>
					</div>}
				</Grid>
			</div>
		);
	}
}

AppContainer.propTypes = {
	notification: PropTypes.object,
};

const mapStateToProps = (state) => ({
	notification: state.notification,
});

export default connect(
	mapStateToProps
)(AppContainer);
