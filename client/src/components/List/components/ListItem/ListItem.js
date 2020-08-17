import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// styles
import './ListItem.scss';


const ListItem = ({
  active,
  iconColor,
  children,
  deleteItem,
  makeItemActive,
  makeItemUnactive,
  classNames,
  id
}) => {
  return (
    <li 
      className={ClassNames('listItem', classNames, (active ? 'listItem-active' : ''))}
      onMouseEnter={() => makeItemActive(id)}
      onMouseLeave={() => makeItemUnactive(id)}
    >
      <div className="listItem__content">
        
        <div className="listItem__left">
          <i className={`listItem__icon listItem__icon-${iconColor}`}></i>
          <span className="listItem__text">{ children }</span>
        </div>
        
        <div className={`listItem__right ${active ? 'listItem__right-show' : 'listItem__right-hide'}`}>
          <button className="listItem__btn" onClick={() => deleteItem(id)}>
          <i className="fas fa-times"></i>
        </button>
      </div>

      </div>
    </li>
  );
};


ListItem.defaultProps = {
  classNames: [],
  active: false,
  iconColor: 'darkGray'
};

ListItem.propTypes = {
  active: PropTypes.bool,
  iconColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  deleteItem: PropTypes.func.isRequired,
  makeItemActive: PropTypes.func.isRequired,
  makeItemUnactive: PropTypes.func.isRequired,
  classNames: PropTypes.array,
  id: PropTypes.string.isRequired
};


export default ListItem;
