import INVALID_EXPRESSION from '../../errors/errors';

const operators = ["+", "/", "-", "*"];
const hasItem = (arr, item) => arr.indexOf(item) !== -1;

const CalculatorReducer = (state, value) => {
  let eqArr = state.equation.split("");
  let lastItem = eqArr[eqArr.length - 1];

  // The value is a number, return the number
  if (!isNaN(value)) {
    return {
      ...state,
      equation: state.equation + value,
      value
    };
  }

  // Dot operator is first to be selected
  if (isNaN(value) && state.equation.length < 1 && value === ".") {
    return {
      ...state,
      equation: "0.",
      value
    };
  }

  // Dot operator is selected
  if (state.equation.length >= 1 && value === ".") {
    // If the last operator selected is the dot operator - do nothing
    if (lastItem === ".") {
      return {
        ...state
      };
    }
    return {
      ...state,
      equation: state.equation + ".",
      value
    };
  }

  // Clear "C" operator is selected
  if (value === "C") {
    return {
      ...state,
      equation: "",
      answer: "",
      error: "",
      value
    };
  }

  // DEL operator is selected
  if (value === "DEL" && state.equation.length >= 1) {
    return {
      ...state,
      equation: state.equation.slice(0, -1),
      value
    };
  }

  // Math operator is selected
  if (hasItem(operators, value) && state.equation.length >= 1) {
    if (isNaN(lastItem)) {
      let eq = state.equation;
      return {
        ...state,
        equation: eq.substring(0, eq.length - 1) + value
      };
    }
    return {
      ...state,
      equation: state.equation + value,
      value
    };
  }

  // Equal operator is selected
  if (value === "=" && state.equation.length >= 1) {
    let answer = "";
    let error = "";
    try {
        answer = eval(state.equation)
    } catch (err) {
        error = INVALID_EXPRESSION;
    }
    
    return {
      ...state,
      answer,
      error
    };
  }

  return {
    ...state,
    value
  };
};

export default CalculatorReducer;
