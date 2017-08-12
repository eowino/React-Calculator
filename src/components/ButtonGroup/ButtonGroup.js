import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button type="button">
      {props.value}
    </button>
  );
};

const ButtonGroup = props => {
  let buttons = props.buttons.map(value =>
    <Button value={value} key={value} />
  );
  return (
    <div>
      {buttons}
    </div>
  );
};

ButtonGroup.proptypes = {
  buttons: PropTypes.array.isRequired
};

export default ButtonGroup;
