import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// local components
import { ListItem } from './components';
// styles
import './List.scss';


const List = (props) => {
  return (
    <ul className={classNames(props.classNames)}>
      {
        props.items.map((item) => (
          <ListItem
            
            key={item._id}
            id={item._id}
            active={item.active}
            iconColor={item.iconColor}
            deleteItem={props.deleteItem}
            makeItemActive={props.makeItemActive}
            makeItemUnactive={props.makeItemUnactive}

          >{ item.title }</ListItem>
        ))
      }
    </ul>
  );
};


List.propTypes = {
  classNames: PropTypes.array,
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  makeItemActive: PropTypes.func.isRequired
};


export default List;