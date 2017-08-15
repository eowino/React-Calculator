import React from "react";
import { mount, shallow } from "enzyme";

import ButtonGroup from "./ButtonGroup";
import { mainButtons } from '../Body/button-data';

describe("ButtonGroup Component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<ButtonGroup />);
    expect(wrapper).toHaveLength(1);
  });

  describe("given an array of buttons", () => {
    it("should render the Button component with the array values", () => {
      const wrapper = mount(<ButtonGroup buttons={mainButtons} />);
      expect(wrapper.find("Button")).toHaveLength(mainButtons.length);
    });
  });
});
