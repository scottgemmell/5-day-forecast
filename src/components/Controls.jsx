import React, { Component } from "react";
import { Grid, Form, Button } from 'react-bootstrap';
import FieldInput from "./FieldInput";

class Controls extends Component {
    render() {

        const { handleFieldChange} = this.props;
        return (
            <header className="app__header">
                <Grid>
                    <h1>
                        Weather app
                    </h1>
                    <Form inline>
                        <FieldInput 
                            id="fieldCity" 
                            name="city"
                            title="Enter a City"
                            placeholderText="Enter a City" 
                            handleFieldChange={handleFieldChange}
                        />
                        {" "}
                        <Button bsStyle="primary">
                            Get 5-day forecast
                        </Button>
                    </Form>
                </Grid>
            </header>
        );
    }
}

export default Controls;