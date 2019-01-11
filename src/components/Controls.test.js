import React from "react";
import { mount } from "enzyme";
import { Controls } from "./Controls.jsx";

const spy = jest.fn();
const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = mount(<Controls fetchForecasts={spy} {...props} />);
	return { wrapper, props };
};

describe("<Controls />", () => {

	const { wrapper } = setup();	
	const mockEvent = { preventDefault: jest.fn() };

	it("html", () => {
		expect(wrapper.find("header").hasClass("header")).toBe(true);
		expect(wrapper.find("h1").exists()).toBe(true);
		expect(wrapper.find("h1").text()).toBe("5-day forecast");
	});

	it("City", () => {
		expect(wrapper.instance().cityInput).toBeTruthy();
		const cityProps = wrapper.find("FieldInput").at(0).props();
		expect(cityProps.placeholderText).toBe("Glasgow");
		expect(cityProps.title).toBe("Enter a City");
		expect(cityProps.value).toBe(undefined);
	});

	it("Country", () => {
		expect(wrapper.instance().countryInput).toBeTruthy();
		const countryProps = wrapper.find("FieldInput").at(1).props();
		expect(countryProps.placeholderText).toBe("UK");
		expect(countryProps.title).toBe("Enter a Country");
		expect(countryProps.value).toBe(undefined);
	});

	// it("Reset", () => {
	// 	const submitBtn = wrapper.find("Button").first().props();
	// 	expect(submitBtn.type).toBe("reset");
	// });

	it("Button", () => {
		const submitBtn = wrapper.find("Button").last();
		//expect(submitBtn.disabled).toBe(true);
		
		submitBtn.simulate("submit", mockEvent);

		//expect(event.preventDefault).toBeCalled();
		expect(submitBtn.props().bsStyle).toBe("primary");
		expect(submitBtn.props().type).toBe("submit");
	});
});
