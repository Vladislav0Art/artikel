import React from 'react';
import PropTypes from 'prop-types';
// components
import { List } from '../../components';
// styles
import './Sidebar.scss';


const Sidebar = (props) => {
  return (
    <div className="articles__sidebar">

      <h4 className="articles__title">
        <i className="fas fa-list-ul"></i>
        <span>{ props.title }</span>
      </h4>

      <List items={[]} classNames={['articles__list']} />

    </div>
  );
};


Sidebar.propTypes = {
  title: PropTypes.string.isRequired
};


export default Sidebar;