import React from "react";
import PropTypes from "prop-types";
import {
	FormGroup, FormControl, ControlLabel, HelpBlock,
} from "react-bootstrap";

const FieldInput = ({ id, name, value, title, helpText, placeholderText, handleChange, handleBlur, hideLabel, modifier, ref }) => {
	return (
		<FormGroup
			controlId={id}
		>
			<ControlLabel className={hideLabel ? "u-visibility-hidden" : ""}>
				{title}
			</ControlLabel>
			{" "}
			<FormControl
				ref={ref}
				type="text" 
				name={name}
				value={value}
				placeholder={placeholderText}
				onChange={handleChange}
				onBlur={handleBlur}
				bsClass={`form-control ${modifier}`}
			/>
			<FormControl.Feedback />

			{helpText && <HelpBlock>
				{helpText}
			</HelpBlock>}

		</FormGroup>
	);
};

FieldInput.defaultProps = {
	helpText: "",
	placeholderText: "",
};

FieldInput.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	helpText: PropTypes.string,
	placeholderText: PropTypes.string,
	handleChange: PropTypes.func,
};

export default FieldInput;