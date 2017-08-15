import React from "react";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { mainButtons, sideButtons } from "./button-data";

const Body = props => {
  return (
    <div className="calculator-body">
      <div className="calculator-side-menu">
        <ButtonGroup buttons={sideButtons} click={props.click} />
      </div>
      <div className="calculator-main">
        <ButtonGroup buttons={mainButtons} click={props.click} />
      </div>
    </div>
  );
};

export default Body;
