import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchForecasts } from "../redux/actions/forecasts.actions";
import { Grid, Form, Button } from "react-bootstrap";
import { FieldInput } from "../components";

export const Controls = () => {

	const dispatch = useDispatch();

	let cityInput = useRef(null);
	let countryInput = useRef(null);

	useEffect(() => {
		cityInput.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(fetchForecasts({
			city: cityInput.value,
			country: countryInput.value
		}));
	};

	return (
		<header className="header">
			<Grid>
				<h1 className="page-title header__title">
					5-day forecast
				</h1>
				<section>
					<div className="c-controls">
						<Form inline onSubmit={handleSubmit}>
							<div className="c-controls__inputs">
								<FieldInput   
									inputRef={input => {
										cityInput = input;
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
										countryInput = input;
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
};

export default Controls;
