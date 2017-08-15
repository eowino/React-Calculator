import React from "react";
import { mount, shallow } from "enzyme";

import Calculator from "./Calculator";
import INVALID_EXPRESSION from "../../errors/errors";

describe("Calculator Component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Calculator />);
    expect(wrapper).toHaveLength(1);
  });

  describe("click functionality", () => {
    describe("given a valid mathematical expression has been created", () => {
      describe("given the equal button is selected", () => {
        it("should render the evaluated answer", () => {
          const wrapper = mount(<Calculator />);
          wrapper.find("#1").simulate("click");
          wrapper.find("#0").simulate("click");
          wrapper.find("#*").simulate("click");
          wrapper.find("#1").simulate("click");
          wrapper.find("#2").simulate("click");
          wrapper.find("#=").simulate("click");
          expect(wrapper.find(".calculator-answer").prop("value")).toEqual(120);
          expect(wrapper.find(".calculator-error")).toHaveLength(0);
        });
      });
    });
    describe("given a invalid mathematical expression has been created", () => {
      describe("given the equal button is selected", () => {
        it("should render an error message", () => {
          const wrapper = mount(<Calculator />);
          wrapper.find("#1").simulate("click");
          wrapper.find("#0").simulate("click");
          wrapper.find("#*").simulate("click");
          wrapper.find("#.").simulate("click");
          wrapper.find("#2").simulate("click");
          wrapper.find("#.").simulate("click");
          wrapper.find("#=").simulate("click");
          expect(wrapper.find(".calculator-error").text()).toEqual(INVALID_EXPRESSION);
          expect(wrapper.find(".calculator-answer")).toHaveLength(0);
        });
      });
    });
  });
});
