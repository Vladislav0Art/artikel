import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// styles
import './FormInput.scss';
import './FormInput-media.scss';


const FormInput = ({
  name,
  type,
  placeholder,
  onChange,
  classNames,
  value,
  children,
  label,
  ...props
}) => {
  
  return (
    <div className="inputBlock">
      <label className="inputBlock__label" htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={ClassNames('inputBlock__input', classNames)}
      />
    </div>
  )
}

FormInput.defaultProps = {
  type: "text",
  classNames: []
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password', 'email']),
  classNames: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
}


export default FormInput;