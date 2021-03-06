import React, { Component } from "react";

import Screen from "../Screen/Screen";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import CalculatorReducer from './CalculatorReducer';

class Calculator extends Component {
  state = {
    equation: "2",
    answer: "",
    value: 0,
    error: ""
  };

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState(() => {
      return CalculatorReducer(this.state, value);
    });
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <Screen equation={this.state.equation} answer={this.state.answer} error={this.state.error}/>
          <Body click={this.handleClick}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calculator;
