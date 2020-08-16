import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';


const List = (props) => {
  return (
    <ul className={ClassNames(props.classNames)}>
      <li className="active">
        <div>
          <span>item</span>
        </div>
      </li>
    </ul>
  );
};


List.propTypes = {
  classNames: PropTypes.array,
  items: PropTypes.array.isRequired
};


export default List;