import React, { Component } from "react";
import { connect } from "react-redux";
import Day from "./Day";

class Forecasts extends Component {
    render() {
        const { 
            forecasts: 
            { 
                list, 
                city: { name } 
            }, 
        } = this.props;      

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
});

export default connect(
    mapStateToProps,
)(Forecasts);