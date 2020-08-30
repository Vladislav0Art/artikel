import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// local components
import { LinksListItem } from './components';
// styles
import './LinksList.scss';



const LinksList = ({ 
  classNames,
  links,
  deleteLink,
  updateLink,
  switchMode
 }) => {
  return (
    <div className={ClassNames('linksList', classNames)}>
      {
        links.length ? 
        <div className="linksList__content">
          {
            links.map(link => (
              <LinksListItem 
                key={link._id}
                id={link._id}
                descr={link.descr}
                title={link.title}
                href={link.href}
                isEditing={link.isEditing}
                deleteLink={deleteLink}
                updateLink={updateLink}
                switchMode={switchMode}
              />
            ))
          }
        </div>
        :
          <p className="linksList__parag">This category does not have any links yet</p>
      }
    </div>
  );
};


LinksList.propTypes = {
  classNames: PropTypes.array,
  links: PropTypes.array.isRequired,
  deleteLink:PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired,
  switchMode: PropTypes.func.isRequired
};


export default LinksList;
