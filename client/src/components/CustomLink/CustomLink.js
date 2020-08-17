import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ClassNames from 'classnames';
// styles
import './CustomLink.scss';


const CustomLink = ({
  to,
  children,
  classNames
}) => {
  return (
    <Link
      to={to}
      className={ClassNames('link', classNames)}
    >{ children }</Link>
  );
};


CustomLink.defaultProps = {
  classNames: [],
  children: 'link'
}


CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  classNames: PropTypes.array
};


export default CustomLink;
