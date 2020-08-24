import React from 'react';
import PropTypes from 'prop-types';
// styles
import './LinksListItem.scss';


const LinksListItem = ({
  id,
  descr,
  title,
  href
}) => {
  return (
    <div className="linksListItem">
      <h5 className="linksListItem__title">{ title }</h5>
      <p className="linksListItem__descr">{ descr !== '' ? descr : 'No description here' }</p>
      <a href={href} target="_blank" rel="noopener noreferrer" className="linksListItem__link">Follow the link</a>
    </div>
  );
};


LinksListItem.propTypes = {
  id: PropTypes.string.isRequired,
  descr: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};


export default LinksListItem;
