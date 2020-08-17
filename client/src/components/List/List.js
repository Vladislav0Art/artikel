import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// styles
import './List.scss';


const List = (props) => {
  return (
    <ul className={classNames(props.classNames)}>
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