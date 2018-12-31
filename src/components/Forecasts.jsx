import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./Day";
import spinner from "../assets/svgs/spinner.svg";

class Forecasts extends Component {

    constructor(props){
        super(props);
        this.filterByDays = this.filterByDays.bind(this);
    }

    filterByDays = data => {
        return (
            data.filter((_k, v) => {
                return (v % 8 === 0) ? true : false;
            })
        );
    };

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
        const filteredList = this.filterByDays(list);

        if (forecastsFailure === true) {
            return <div></div>;
        }

        if (forecastsLoading === true) {
            return <div className="u-spinner"><img src={spinner} alt="Loading..." /></div>;
        }

        return (
            <section>
                <h2 className="section-title">
                    Forecasts
                    {" "}<em>for</em>{" "}
                    {name}
                </h2>

                <div className="forecasts l-panels l-panels@small l-panels@medium l-panels@large">
                    {filteredList
                        .map((item, i) => {
                        return <Day key={i} idx={i+1} item={item} />
                    })}
                </div>
            </section>
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