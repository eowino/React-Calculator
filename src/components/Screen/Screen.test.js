import React from "react";
import { mount, shallow } from "enzyme";

import Screen from "./Screen";
import INVALID_EXPRESSION from "../../errors/errors";

describe("Screen component", () => {
  it("should render the component without crashing", () => {
    const wrapper = shallow(<Screen />);
    expect(wrapper.find(".calculator-output")).toHaveLength(1);
  });
  
  it("should render an equation from props", () => {
    const equation = "10+10";
    const wrapper = mount(<Screen equation={equation} />);
    expect(wrapper.find(".calculator-user-input").prop("value")).toEqual(equation);
  });

  describe("given an equation has been provided", () => {
    describe("given the equation is invalid", () => {
      it("should display the error message", () => {
        const wrapper = mount(<Screen error={INVALID_EXPRESSION} />);
        const target = wrapper.find(".calculator-error");
        expect(target).toHaveLength(1);
        expect(wrapper.find(".calculator-answer")).toHaveLength(0);
        expect(target.text()).toEqual(INVALID_EXPRESSION);
      });
    });

    describe("given the equation is valid", () => {
      it("should display the answer", () => {
        const answer = 4;
        const wrapper = mount(<Screen answer={answer}/>);
        const target = wrapper.find(".calculator-answer");
        expect(target).toHaveLength(1);
        expect(wrapper.find(".calculator-error")).toHaveLength(0);
        expect(target.prop('value')).toEqual(answer);
      });
    });
  });
});
