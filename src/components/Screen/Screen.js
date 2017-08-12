import React from "react";
import PropTypes from "prop-types";

const Screen = props => {
  return (
    <div className="calculator-output">
      <div className="calculator-user-input">{props.equation}</div>
      <div className="calculator-answer">{props.answer}</div>
    </div>
  );
};

Screen.proptypes = {
  equation: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Screen;
