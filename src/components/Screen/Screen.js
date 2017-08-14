import React from "react";
import PropTypes from "prop-types";

import INVALID_EXPRESSION from '../../errors/errors';

const Screen = props => {
  return (
    <div className="calculator-output">
      <div className="calculator-user-input">{props.equation}</div>
      {
        props.error === INVALID_EXPRESSION ? 
          <div className="calculator-error">{props.error}</div>
          :
          <div className="calculator-answer">{props.answer}</div>
      }
    </div>
  );
};

Screen.proptypes = {
  equation: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Screen;
