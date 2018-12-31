import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Form, Button } from 'react-bootstrap';
import FieldInput from "./FieldInput";
import { updateCity } from "../actions";

class Controls extends Component {

    constructor(props) {
        super(props);

		this.state = {
            selectedCity: null
		};
        
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { selectedCity } = this.props;
        const { value } = e.target;
        console.log("handleChange", value);
		selectedCity({ value });
    }
    
    render() {

        const { handleSubmit } = this.props;
        return (
        
                <header className="app__header">
                <Grid>
                    <h1 className="page-title">
                        Weather app
                    </h1>

                    <section>
                        <h2 className="section-title">
                            Controls
                        </h2>
                        <Form inline onSubmit={handleSubmit}>
                            <FieldInput 
                                id="fieldCity" 
                                name="city"
                                title="Enter a City"
                                placeholderText="e.g Glasgow" 
                                handleChange={this.handleChange}
                            />
                            {" "}
                            <Button 
                                bsStyle="primary"
                                type="submit" 
                            >
                                Get 5-day forecast
                            </Button>
                        </Form>
                    </section>
                    </Grid>
                </header>
                
        );
    }
}

const mapStateToProps = state => ({
    selectedCity: state.selectedCity,
});

export default connect(
    mapStateToProps,
    {
		selectedCity: updateCity,
    }
)(Controls);