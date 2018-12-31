import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Grid } from 'react-bootstrap';
import Controls from "../components/Controls.jsx";
import { cityUpdated, countryUpdated, reset, getForecastData } from "../actions";
import Forecasts from "../components/Forecasts.jsx";

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

	handleCityChange(e) {
        const { cityUpdated } = this.props;
        const { name, value } = e.target;
        //console.log("handleCityChange", { name, value });
        cityUpdated({ name, value });
    }
 
    handleCountryChange(e) {
		const { countryUpdated } = this.props;
        const { name, value } = e.target;
        //console.log("handleCountryChange", { name, value });
        countryUpdated({ name, value });
    }

    handleReset() {
		const { reset } = this.props;
        reset();
    }

    getForecasts = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const { getForecastData, city, country } = this.props;
        
        getForecastData({city, country});
    }
    
    render() {
        const { city, country, data, forecastsFailure } = this.props;
        //const { city } = data;
        //console.log("data", { data });

        

        return (
            <div className="app">
                <Controls 
                    handleCityChange={this.handleCityChange} 
                    handleCountryChange={this.handleCountryChange} 
                    handleCityBlur={this.handleCityChange} 
                    handleCountryBlur={this.handleCountryChange} 
                    handleReset={this.handleReset} 
                    handleSubmit={this.getForecasts} 
                    hasErrors={city && country} 
                />
                <Grid>
                    {(data !== "") && <Forecasts />}

                    {(forecastsFailure === true) && 
                    <div>
                        <h2 className="section-title">Error :(</h2>
                        <Alert bsStyle="danger" bsClass="c-controls__alert alert">
        Invalid <strong>City</strong> and/or <strong>Country</strong></Alert>
                    </div>}
                </Grid>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    city: state.forecasts.city,
    country: state.forecasts.country,
    data: state.forecasts.data,
    forecastsFailure: state.forecastsFailure,
    forecastsLoading: state.forecastsLoading
});

export default connect(
    mapStateToProps,
    {
        cityUpdated,
        countryUpdated,
        reset,
        getForecastData,
    },
)(AppContainer);
