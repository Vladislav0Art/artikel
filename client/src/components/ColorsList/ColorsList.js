import React from 'react';
import PropTypes from 'prop-types';
// components
import { ColorsListItem } from '../index';
// styles
import './ColorsList.scss';


const ColorsList = ({ colors, setColor }) => {
  return (
    <div className="colorsList">
      {
        colors.map((item) => 
          <ColorsListItem 
            key={item.id}
            id={item.id}
            color={item.color}
            isActive={item.active} 
            onClick={setColor} 
          />)
      }
    </div>
  );
};

ColorsList.propTypes = {
  colors: PropTypes.array.isRequired,
  setColor: PropTypes.func.isRequired
};

export default ColorsList;
