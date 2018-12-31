import React, { Component } from "react";
import { Button, Grid } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
	render() {
		return (
			<Grid>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						
						<Button bsStyle="primary">
							Submit
						</Button>
					</header>
				</div>
			</Grid>
		);
	}
}

export default App;
