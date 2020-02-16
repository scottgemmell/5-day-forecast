import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FieldInput } from "../components";

export const Controls = () => {

	//const dispatch = useDispatch();

	//let cityInput = useRef(null);
	// let countryInput = useRef(null);

	//useEffect(() => {
		//cityInput.focus();

		//dispatch(fetchForecasts());
	//}, []);

	return (
		<header className="header">
			<Container>
				<h1 className="page-title header__title">
					5-day forecast
				</h1>
				<section>
					<div className="c-controls">
						<Form inline>
							<div className="c-controls__inputs">
								<FieldInput   
									// inputRef={input => {
									// 	cityInput = input;
									// }} 
									disabled
									id="fieldCity" 
									name="city"
									placeholderText="Glasgow" 
									title="Enter a City"
									hideLabel={true} 
									modifier="c-controls__input c-controls__input--city"
								/>
								{" "}
								<FieldInput 
									// inputRef={input => {
									// 	countryInput = input;
									// }} 
									disabled
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
									type="submit" 
								>
									Get 5-day forecast
								</Button>
							</div>
						</Form>
					</div>
				</section>
			</Container>
		</header>   
	);
};

export default Controls;
