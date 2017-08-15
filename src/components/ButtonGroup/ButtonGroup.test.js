import React from "react";
import { mount, shallow } from "enzyme";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup Component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<ButtonGroup />);
    expect(wrapper).toHaveLength(1);
  });

  describe("given an array of buttons", () => {
    it("should render the Button component with the array values", () => {
      const buttons = [1, 2, 3, 4, 5];
      const wrapper = mount(<ButtonGroup buttons={buttons} />);
      expect(wrapper.find("Button")).toHaveLength(buttons.length);
    });
  });
});
