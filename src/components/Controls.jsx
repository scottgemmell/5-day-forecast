import React from "react";
import PropTypes from "prop-types";
import { Alert, Grid, Form, Button } from "react-bootstrap";
import FieldInput from "./FieldInput";

const Controls = ({ handleCityBlur, handleCityChange, handleCountryBlur, handleCountryChange, handleSubmit, handleReset, hasErrors }) => {    
	return (
		<header className="header">
			<Grid>
				<h1 className="page-title header__title">
						5-day forecast
				</h1>

				<section>
					<h2 className="section-title u-visibility-hidden">
						Controls
					</h2>
					<div className="c-controls">
						<Form inline onSubmit={handleSubmit}>
							<div className="c-controls__inputs">
								<FieldInput 
									id="fieldCity" 
									name="city"
									placeholderText="Glasgow" 
									title="Enter a City"
									handleBlur={handleCityBlur}
									handleChange={handleCityChange}
									hideLabel={true} 
									modifier="c-controls__input c-controls__input--city"
								/>
								{" "}
								<FieldInput 
									id="fieldCountry" 
									name="country"
									placeholderText="UK" 
									title="Enter a Country"
									handleBlur={handleCountryBlur}
									handleChange={handleCountryChange}
									hideLabel={true} 
									modifier="c-controls__input c-controls__input--country"
								/>
								{" "}
							</div>
							<div className="c-controls__actions">
								<Button 
									type="reset" 
									onClick={handleReset}
								>
									Reset
								</Button>
								{" "}
								<Button 
									bsStyle="primary"
									disabled={!hasErrors}
									type="submit" 
								>
									Get 5-day forecast
								</Button>
							</div>
							
							{!hasErrors && <Alert bsStyle="info" bsClass="c-controls__alert alert">
								Please enter a <strong>City</strong> and a <strong>Country</strong>
							</Alert>}
						</Form>
					</div>
				</section>
			</Grid>
		</header>   
	);
};

Controls.propTypes = {
	handleCityBlur: PropTypes.func, 
	handleCityChange: PropTypes.func,  
	handleCountryBlur: PropTypes.func, 
	handleCountryChange: PropTypes.func, 
	handleSubmit: PropTypes.func, 
	handleReset: PropTypes.func, 
	hasErrors: PropTypes.string,
};

export default Controls;
