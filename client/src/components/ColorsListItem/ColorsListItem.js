import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// styles
import './ColorsListItem.scss';


const ColorsListItem = ({ onClick, color, isActive, id, classNames }) => {
  return (
    <button 
      onClick={() => onClick(id, color)}
      className={ClassNames(`colorsListItem colorsListItem-${color} ${ isActive ? 'colorsListItem-active' : '' }`, classNames)}
    >
    </button>
  );
};

ColorsListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}; 

export default ColorsListItem;
