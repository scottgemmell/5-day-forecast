import React from "react";
import { mount, shallow } from "enzyme";
import { Controls } from "./Controls.jsx";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
	const props = Object.assign({}, defaultProps(), overrideProps);
	const wrapper = shallow(<Controls {...props} />);
	return { wrapper, props };
};

describe("<Controls />", () => {

	const { wrapper } = setup();

	//console.log(wrapper.debug())

	it("html", () => {
		expect(wrapper.find("header").hasClass("header")).toBe(true);
		expect(wrapper.find("h1").exists()).toBe(true);
		expect(wrapper.find("h1").text()).toBe("5-day forecast");
	});

	it("City", () => {
		const cityProps = wrapper.find("FieldInput").at(0).props();
		expect(cityProps.placeholderText).toBe("Glasgow");
		expect(cityProps.title).toBe("Enter a City");
		expect(cityProps.value).toBe(undefined);
	});

	it("Country", () => {
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
		const submitBtn = wrapper.find("Button").last().props();
		//expect(submitBtn.disabled).toBe(true);
		expect(submitBtn.type).toBe("submit");
	});
});
