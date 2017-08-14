import CalculatorReducer from "./CalculatorReducer";
import INVALID_EXPRESSION from '../../errors/errors';

let state;
beforeEach(() => {
  state = {
    equation: "",
    answer: "",
    value: 0
  };
});

describe("Calculator Reducer", () => {
  describe("given a number has been selected", () => {
    it("should append the number to the equation", () => {
      let newState = CalculatorReducer(state, "1");
      expect(newState.equation).toBe("1");
    });

    it("should append the number to the equation", () => {
      state.equation = "11";
      let newState = CalculatorReducer(state, "2");
      expect(newState.equation).toBe("112");
    });
  });

  describe("when the calculator state is clean", () => {
    describe("given the dot operator is selected", () => {
      it('should append "0." to the equation', () => {
        let newState = CalculatorReducer(state, ".");
        expect(newState.equation).toBe("0.");
      });
    });
  });

  describe("when the calculator state is not clean", () => {
    describe("given the dot operator is selected", () => {
      describe("given the last operator selected is NOT the dot operator", () => {
        it('should append "." to the equation', () => {
          state.equation = "1+2";
          let newState = CalculatorReducer(state, ".");
          expect(newState.equation).toBe("1+2.");
        });
      });
      describe("given the last operator selected is the dot operator", () => {
        it("should not append another dot operator to the equation", () => {
          state.equation = "1+2.";
          let newState = CalculatorReducer(state, ".");
          expect(newState.equation).toBe("1+2.");
        });
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
      it("should add the divide sign to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "/");
        expect(newState.equation).toBe("1+2+3/");
      });
      it("should add the plus sign to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "+");
        expect(newState.equation).toBe("1+2+3+");
      });
      it("should add the minus sign to the equation", () => {
        state.equation = "1+2+3";
        let newState = CalculatorReducer(state, "-");
        expect(newState.equation).toBe("1+2+3-");
      });
      it("should add the multiply sign to the equation", () => {
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

  describe("when the equal button is selected", () => {
    describe("given there is nothing to evaluate", () => {
      it("should not do anything", () => {
        let newState = CalculatorReducer(state, "=");
        expect(newState.equation).toBe("");
        expect(newState.answer).toBe("");
      });
    });
    describe("given there is an expression to evaluate", () => {
      it("should evaluate the expression and update the answer value", () => {
        let equation = "1+2+3";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.answer).toBe(eval(`${equation}`));
      });
      it("should evaluate the expression and update the answer value", () => {
        let equation = "4*6*4-1";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.answer).toBe(eval(`${equation}`));
      });
      it("should evaluate the expression and update the answer value", () => {
        let equation = "-1-3-5-7-8-9/2";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.answer).toBe(eval(`${equation}`));
      });
      it("should evaluate the expression and update the answer value", () => {
        let equation = "1/0";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.answer).toBe(eval(`${equation}`));
      });
      it("should evaluate the expression and update the answer value", () => {
        let equation = "0/1";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.answer).toBe(eval(`${equation}`));
      });
    });
    describe("given there is an invalid expression to evaluate", () => {
      it("should catch its corresponding error and display an error message", () => {
        let equation = "1.2.3.4 + 1";
        state.equation = equation;
        let newState = CalculatorReducer(state, "=");
        expect(newState.error).toBe(INVALID_EXPRESSION);
      });
    });
  });
});
