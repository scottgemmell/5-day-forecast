import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./Day";

class Forecasts extends Component {

    constructor(props){
        super(props);

    }



    render() {
        const { 
            forecasts: 
            { 
                list, 
                city: { name } 
            },  
            forecastsLoading,
            forecastsFailure
        } = this.props;

        

        if (forecastsFailure === true) {
            return <div></div>;
        }

        if (forecastsLoading === true) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2 className="section-title">
                    Forecasts
                    {" "}<em>for</em>{" "}
                    {name}
                </h2>

                <div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
                    {list
                        .map((item, i) => {
                        return <Day key={i} idx={i+1} item={item} />
                    })}
                </div>
            </div>
        )
    }
}

Forecasts.defaultProps = {
    forecasts: {
        list: [],
        city: {
            name: "",
        }
    }
}

const mapStateToProps = (state) => ({
    forecasts: state.forecasts.data,
    forecastsFailure: state.forecastsFailure,
    forecastsLoading: state.forecastsLoading
});

export default connect(
    mapStateToProps,
)(Forecasts);