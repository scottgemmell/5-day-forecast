import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Controls extends Component {
    render() {
        return (
            <header className="app__header">
                <h1>
                    Weather app
                </h1>
                <Button bsStyle="primary">
                    Submit
                </Button>
            </header>
        );
    }
}

export default Controls;