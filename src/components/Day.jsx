import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import logo from "../assets/svgs/logo.svg";

class Day extends Component {
    render() {
        return (
            <Row className="slab u-bgcolor-b">
                <Col xs={12} sm={4} className="slab__head u-bgcolor-a">
                    <img src={logo} alt="" />
                </Col>
                <Col xs={6} sm={8} className="slab__body u-bgcolor-a">
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
            </Row>
        )
    }
}

export default Day; 