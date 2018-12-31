import React, { Component } from "react";
import { Grid, Col } from 'react-bootstrap';
import cloudyDay from "../assets/svgs/vendor/amcharts/animated/cloudy-day-1.svg";
import rainyDay from "../assets/svgs/vendor/amcharts/animated/rainy-6.svg";

class Day extends Component {
    render() {
        return (
            <section>
                <h2 className="section-title">
                    Forecasts
                </h2>

                <h3 className="">
                    {this.props.selectedCity}
                </h3>
                <Grid>
                <div className="slab u-bgcolor-b">
                        <Col xs={12} sm={4} className="slab__head u-bgcolor-a">
                            <img src={cloudyDay} alt="Cloudy" />
                        </Col>
                        <Col xs={12} sm={8} className="slab__body u-bgcolor-a">
                            <dl>
                                <dt>
                                    Day:
                                </dt>
                                <dd>
                                    Monday
                                </dd>
                                <dt>
                                    Weather:
                                </dt>
                                <dd>
                                    Sunny
                                </dd>
                                <dt>
                                    Description:
                                </dt>
                                <dd>
                                    Lorem ipsum dolor set elit
                                </dd>
                                <dt>
                                    Temperature:
                                </dt>
                                <dd>
                                    37
                                </dd>
                            </dl>
                        </Col>
                    </div>

                    <div className="slab u-bgcolor-b">
                        <Col xs={12} sm={4} className="slab__head u-bgcolor-a">
                            <img src={rainyDay} alt="Raining" />
                        </Col>
                        <Col xs={12} sm={8} className="slab__body u-bgcolor-a">
                            <dl>
                                <dt>
                                    Day:
                                </dt>
                                <dd>
                                    Tuesday
                                </dd>
                                <dt>
                                    Weather:
                                </dt>
                                <dd>
                                    Raining
                                </dd>
                                <dt>
                                    Description:
                                </dt>
                                <dd>
                                    Lorem ipsum dolor set elit
                                </dd>
                                <dt>
                                    Temperature:
                                </dt>
                                <dd>
                                    37
                                </dd>
                            </dl>
                        </Col>
                    </div>

                </Grid>
            </section>
        )
    }
}

export default Day;