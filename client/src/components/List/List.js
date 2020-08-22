import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// local components
import { ListItem } from './components';
// styles
import './List.scss';


const List = (props) => {
  return (
    <ul className={classNames('list', props.classNames)}>
      
      {
        props.items.length ?
          props.items.map((item) => (
            <ListItem
              
              key={item._id}
              id={item._id}
              active={item.active}
              iconColor={item.iconColor}
              deleteItem={props.deleteItem}

            >{ item.title }</ListItem>
          ))
        :
          <p className="list__parag">No categories were found</p>
      }
      
    </ul>
  );
};


List.propTypes = {
  classNames: PropTypes.array,
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired
};


export default List;