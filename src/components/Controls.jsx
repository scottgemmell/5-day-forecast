import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchForecasts } from "../redux/actions/forecasts.actions";
import { Grid, Form, Button } from "react-bootstrap";
import FieldInput from "./FieldInput";

class Controls extends Component {    

	constructor(props) {
		super(props);
		
		this.cityInput = React.createRef();
		this.countryInput = React.createRef();

		this.getForecasts = this.getForecasts.bind(this);
	}

	// componentDidMount() {
	// 	this.cityInput.current.focus();
	// }

	getForecasts = (e) => {
		e.preventDefault();

		const { fetchForecasts } = this.props;

		fetchForecasts({ 
			city: this.cityInput.current.value, 
			country: this.cityInput.current.value, 
		});
	}

	render(){

		console.log("ref", this.cityInput);

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
										inputRef={this.cityInput} 
										id="fieldCity" 
										name="city"
										//value={this.cityInput} 
										placeholderText="Glasgow" 
										title="Enter a City"
										//handleBlur={handleCityBlur}
										//handleChange={handleCityChange}
										hideLabel={true} 
										modifier="c-controls__input c-controls__input--city"
									/>
									{" "}
									<FieldInput 
										inputRef={this.countryInput}
										id="fieldCountry" 
										name="country"
										placeholderText="UK" 
										title="Enter a Country"
										//handleBlur={handleCityBlur}
										//handleChange={handleCityChange}
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
};

export default connect(
	null,
	{
		fetchForecasts,
	},
)(Controls);
