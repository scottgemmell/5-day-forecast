import React from "react";
import PropTypes from "prop-types";
import {
	FormGroup, FormControl, ControlLabel, HelpBlock,
} from "react-bootstrap";

const FieldInput = ({ id, name, value, title, helpText, placeholderText, handleFieldChange }) => {
	return (
		<FormGroup
			controlId={id}
		>
			<ControlLabel>
				{title}
			</ControlLabel>
                {" "}
			<FormControl
				type="text" 
				name={name}
				value={value}
				placeholder={placeholderText}
				onChange={handleFieldChange}
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
	handleFieldChange: PropTypes.func.isRequired,
};

export default FieldInput;