import React from "react";

import ButtonGroup from "../ButtonGroup/ButtonGroup";

const Body = props => {
  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "="];
  const operators = ["C", "DEL", "/", "*", "-", "+"];

  return (
    <div className="calculator-body">
      <div className="calculator-side-menu">
        <ButtonGroup buttons={operators} click={props.click} />
      </div>
      <div className="calculator-main">
        <ButtonGroup buttons={buttons} click={props.click} />
      </div>
    </div>
  );
};

export default Body;
