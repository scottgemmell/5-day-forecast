import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchForecasts } from "../redux/actions/forecasts.actions";
import { Grid, Form, Button } from "react-bootstrap";
import { FieldInput } from "../components";

export class Controls extends Component {    

	constructor(props) {
		super(props);

		this.getForecasts = this.getForecasts.bind(this);
	}

	componentDidMount() {
		this.cityInput.focus();
	}

	getForecasts = (e) => {
		e.preventDefault();

		const { fetchForecasts } = this.props;

		fetchForecasts({ 
			city: this.cityInput.value, 
			country: this.countryInput.value, 
		});
	}

	render(){
		return (
			<header className="header">
				<Grid>
					<h1 className="page-title header__title">
						5-day forecast
					</h1>
					<section>
						<div className="c-controls">
							<Form inline onSubmit={this.getForecasts}>
								<div className="c-controls__inputs">
									<FieldInput   
										inputRef={input => {
											this.cityInput = input;
										}} 
										id="fieldCity" 
										name="city"
										placeholderText="Glasgow" 
										title="Enter a City"
										hideLabel={true} 
										modifier="c-controls__input c-controls__input--city"
									/>
									{" "}
									<FieldInput 
										inputRef={input => {
											this.countryInput = input;
										}} 
										id="fieldCountry" 
										name="country"
										placeholderText="UK" 
										title="Enter a Country"
										hideLabel={true} 
										modifier="c-controls__input c-controls__input--country"
									/>
								</div>
								<div className="c-controls__actions">
									<Button 
										bsStyle="primary"
										type="submit" 
									>
										Get 5-day forecast
									</Button>
								</div>
							</Form>
						</div>
					</section>
				</Grid>
			</header>   
		);
	}
};

Controls.propTypes = {
	handleSubmit: PropTypes.func,
	fetchForecasts: PropTypes.func,
};

export default connect(null, { fetchForecasts })(Controls);
