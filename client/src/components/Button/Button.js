import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// styles
import './Button.scss';


const Button = ({
  type,
  text,
  onClick,
  classNames
}) => {
  return (
    <button type={type} className={ClassNames('button', classNames)} onClick={onClick}>
      { text }
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  classNames: []
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classNames: PropTypes.array,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};


export default Button;