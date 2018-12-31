import React, { Component } from "react";
import { Alert, Grid, Form, Button } from 'react-bootstrap';
import FieldInput from "./FieldInput";

class Controls extends Component {

    render() {

        const { handleCityBlur, handleCityChange, handleCountryBlur, handleCountryChange, handleSubmit, handleReset, hasErrors } = this.props;
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
                                        //value=""
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
                                        //value=""
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
    }
}

export default Controls;
