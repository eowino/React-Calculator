import React from "react";
import PropTypes from "prop-types";

import INVALID_EXPRESSION from "../../errors/errors";

const Screen = props => {
  return (
    <div className="calculator-output">
      <input
        type="text"
        className="calculator-user-input"
        value={props.equation}
        disabled
      />
      {props.error === INVALID_EXPRESSION
        ? <div className="calculator-error">
            {props.error}
          </div>
        : <input
            type="text"
            className="calculator-answer"
            value={props.answer}
            disabled
          />}
    </div>
  );
};

Screen.proptypes = {
  equation: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default Screen;
