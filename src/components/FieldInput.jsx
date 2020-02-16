import React from "react";
import PropTypes from "prop-types";
import {
	Form, Alert,
} from "react-bootstrap";

const FieldInput = ({ 
	id, 
	name, 
	value, 
	title, 
	helpText, 
	placeholderText, 
	hideLabel, 
	modifier, 
	inputRef 
}) => (
	<Form.Group
		controlId={id}
	>
		<Form.Label className={hideLabel ? "u-visibility-hidden" : ""}>
			{title}
		</Form.Label>
		{" "}
		<Form.Control
			//inputRef={inputRef}
			type="text" 
			name={name}
			value={value}
			placeholder={placeholderText}
			// bsClass={`form-control ${modifier}`}
		/>
		<Form.Control.Feedback />

		{helpText && <Alert variant="danger">
			{helpText}
		</Alert>}

	</Form.Group>
);

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
	hideLabel: PropTypes.bool, 
	modifier: PropTypes.string, 
	inputRef: PropTypes.func
};

export default FieldInput;