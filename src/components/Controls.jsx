import React from "react";
import PropTypes from "prop-types";
import { Grid, Form, Button } from "react-bootstrap";

const Controls = ({ handleSubmit }) => {    
	return (
		<header className="header">
			<Grid>
				<h1 className="page-title header__title">
					5-day forecast
				</h1>
				<section>
					<div className="c-controls">
						<Form inline onSubmit={handleSubmit}>
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

Controls.propTypes = {
	handleSubmit: PropTypes.func,
};

export default Controls;
