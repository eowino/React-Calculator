import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <button type="button" id={props.id} onClick={props.click}>
      {props.value}
    </button>
  );
};

const ButtonGroup = ({ click, buttons = [] }) => {
  let btns = buttons.map(value =>
    <Button value={value.val} id={value.id} key={value.val} click={() => click(value.val)} />
  );
  return (
    <div>
      {btns}
    </div>
  );
};

ButtonGroup.proptypes = {
  buttons: PropTypes.array.isRequired
};

export default ButtonGroup;
