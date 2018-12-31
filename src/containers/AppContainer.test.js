import React from "react";
import AppContainer from "./AppContainer";
import { shallow } from "enzyme";

const defaultProps = () => ({});
const setup = (overrideProps = {}) => {
    const props = Object.assign({}, defaultProps(), overrideProps);
    const wrapper = shallow(<AppContainer {...props} />);
    return { wrapper, props };
};

describe("<AppContainer />", () => {
    it("renders", () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});