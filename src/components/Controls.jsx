import React, { Component } from "react";
import { Grid, Form, Button } from 'react-bootstrap';
import FieldInput from "./FieldInput";

class Controls extends Component {
    render() {

        const { handleChange, handleSubmit } = this.props;
        return (
        
                <header className="app__header">
                <Grid>
                    <h1>
                        Weather app
                    </h1>
                    <Form inline onSubmit={handleSubmit}>
                        <FieldInput 
                            id="fieldCity" 
                            name="city"
                            title="Enter a City"
                            placeholderText="e.g Glasgow" 
                            handleChange={handleChange}
                        />
                        {" "}
                        <Button 
                            bsStyle="primary"
                            type="submit" 
                        >
                            Get 5-day forecast
                        </Button>
                    </Form>
                    </Grid>
                </header>
                
        );
    }
}

export default Controls;