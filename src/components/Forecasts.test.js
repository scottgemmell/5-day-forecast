import React from "react";
import { Forecasts } from "./Forecasts";
import { shallow } from "enzyme";
import { forecasts } from "../data/fixtures.js";


const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Forecasts {...props} />);
	return { wrapper, props };
};

describe("<Forecasts />", () => {

	const { wrapper } = setup({ forecasts });

	it("renders", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it("Section Title", () => {
		expect(wrapper.find("section").exists()).toBe(true);
		expect(wrapper.find("h2").exists()).toBe(true);
		expect(wrapper.find("h2").hasClass("section-title")).toBe(true);
		expect(wrapper.find("h2").text()).toBe("Forecasts for Aberdeen");
	});

	//console.log(wrapper.debug());
	
});
