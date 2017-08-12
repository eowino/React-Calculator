import React, { Component } from "react";

import Header from "../Header/Header";
import Screen from "../Screen/Screen";
import Body from "../Body/Body";

class Calculator extends Component {
  render() {
    return (
      <div>
        <Header title="Basic Calculator" />
        <div className="calculator">
          <Screen />
          <Body />
        </div>
      </div>
    );
  }
}

export default Calculator;
