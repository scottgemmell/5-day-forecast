import React, { Component } from "react";
import { Grid, Col } from 'react-bootstrap';
import cloudyDay from "../assets/svgs/vendor/amcharts/animated/cloudy-day-1.svg";

class Day extends Component {
    render() {
        return (
            <section>
                <div className="c-day day@small day@medium">
                
                
                        <Col xs={6} className="c-day__body u-bgcolor-a">
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
                        <Col xs={6} className="c-day__head">
                        
                            <img src={cloudyDay} alt="Cloudy" />
                        </Col>
                    </div>

            </section>
        )
    }
}

export default Day;