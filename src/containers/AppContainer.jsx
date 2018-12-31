import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import "../assets/scss/master.scss";
import Controls from "../components/Controls";
import Day from "../components/Day";

class AppContainer extends Component {
	render() {
		return (
			<Grid>
				<div className="app">
					<Controls />
                    <main>
                        <Grid>
                            <Day />
                        </Grid>
                    </main>
				</div>
			</Grid>
		);
	}
}

export default AppContainer;
