import React from "react";
import ReactDOM from "react-dom";
import CalculatorReducer from "./CalculatorReducer";

let state;
beforeEach(() => {
  state = {
    equation: "",
    answer: "",
    value: 0
  };
});

describe("Calculator Reducer", () => {
  describe("given a valid number", () => {
    it("should append a number to the equation", () => {
      let newState = CalculatorReducer(state, "1");
      expect(newState.equation).toBe("1");
    });

    it("should append a number to the equation", () => {
      state.equation = "11";
      let newState = CalculatorReducer(state, "2");
      expect(newState.equation).toBe("112");
    });
  });

  describe("when the calculator state is clean", () => {
    describe("given the dot operator", () => {
      it('should append "0." to the equation', () => {
        let newState = CalculatorReducer(state, ".");
        expect(newState.equation).toBe("0.");
      });
    });
  });

  describe("when DEL button is selected", () => {
    it("should remove the last item added to the equation", () => {
      state.equation = "1+2+";
      let newState = CalculatorReducer(state, "DEL");
      expect(newState.equation).toBe("1+2");
    });
  });

  describe("when the divide, add, minus, or multiply button is selected", () => {
    describe("given the last item in the equation is a number", () => {
      it("should add the divide button to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "/");
        expect(newState.equation).toBe("1+2+3/");
      });
      it("should add the plus button to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "+");
        expect(newState.equation).toBe("1+2+3+");
      });
      it("should add the minus button to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "-");
        expect(newState.equation).toBe("1+2+3-");
      });
      it("should add the multiply button to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "*");
        expect(newState.equation).toBe("1+2+3*");
      });
    });
    describe("given the last item in the equation is an operator", () => {
      it("should replace the last item in the equation with the divide symbol", () => {
        state.equation = "1+2+3+";
        let newState = CalculatorReducer(state, "/");
        expect(newState.equation).toBe("1+2+3/");
      });
      it("should replace the last item in the equation with the plus symbol", () => {
        state.equation = "1+2+3/";
        let newState = CalculatorReducer(state, "+");
        expect(newState.equation).toBe("1+2+3+");
      });
      it("should replace the last item in the equation with the minus symbol", () => {
        state.equation = "1+2+3+";
        let newState = CalculatorReducer(state, "-");
        expect(newState.equation).toBe("1+2+3-");
      });
      it("should replace the last item in the equation with the multiply symbol", () => {
        state.equation = "1+2+3+";
        let newState = CalculatorReducer(state, "*");
        expect(newState.equation).toBe("1+2+3*");
      });
    });
  });
});
