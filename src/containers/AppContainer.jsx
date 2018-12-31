import React, { Component } from "react";
import Controls from "../components/Controls.jsx";
import Day from "../components/Day.jsx";

class AppContainer extends Component {

    constructor(props) {
        super(props);

		this.state = {
            
		};
        
		this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
		const { name, value } = e.target;
		console.log({ name, value });
    }

    handleSubmit(e) {
        e.preventDefault();
		const { value } = e.target;
		console.log({ value });
    }
    
    render() {
        return (
            <div>
                <Controls handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <Day />
            </div>
        );
    }
}

export default AppContainer;