import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// components
import { FormInput } from '../../../index';
// styles
import './LinksListItem.scss';
import './LinksListItem-media.scss';


const LinksListItem = ({
  id,
  descr,
  title,
  href,
  isEditing,
  deleteLink,
  updateLink,
  switchMode
}) => {
  // local state
  const [link, setLink] = React.useState({
    title,
    descr,
    href
  });


  // handle input changing event
  const handleInput = (e) => {
    e.persist();
    setLink(prevLink => ({
      ...prevLink,
      [e.target.name]: e.target.value
    }));
  }; 


  // local Button component
  const Button = ({ children, onClick, classNames }) => (
    <button onClick={onClick} className={ClassNames(classNames)}>{ children }</button>
  );

  Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    classNames: PropTypes.array
  };


  return (
    <div className="linksListItem">
      <div className="linksListItem__content">
        
        <div className="linksListItem__left">
          {
            isEditing ? 
              <React.Fragment>
                <div className="linksListItem__inputContainer">
                  <FormInput 
                    name="title"
                    type="text"
                    placeholder="New title"
                    onChange={handleInput}
                    value={link.title}
                    label=""
                    blockClassNames={['linksListItem__inputBlock']}
                  />

                  <FormInput 
                    name="descr"
                    type="text"
                    placeholder="New description"
                    onChange={handleInput}
                    value={link.descr}
                    label=""
                    blockClassNames={['linksListItem__inputBlock']}
                  />

                  <FormInput 
                    name="href"
                    type="text"
                    placeholder=""
                    onChange={handleInput}
                    value={link.href}
                    label=""
                    blockClassNames={['linksListItem__inputBlock']}
                  />
                </div>
              </React.Fragment>
            :
              <React.Fragment>
                <h5 className="linksListItem__title">{ link.title }</h5>
                <p className="linksListItem__descr">{ link.descr !== '' ? link.descr : 'No description here' }</p>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="linksListItem__link">Follow the link</a>
              </React.Fragment>
          }
        </div>

        <div className="linksListItem__right">
          <Button 
            classNames={['linksListItem__btn linksListItem__btn-delete']}
            onClick={() => deleteLink(id)}
          >
            <i className="fas fa-trash-alt"></i>
          </Button>

          {
            isEditing ? 
            <Button
              classNames={['linksListItem__btn linksListItem__btn-update']}
              onClick={() => updateLink(id, link)}
            >
              <i className="fas fa-check-square"></i>
            </Button>
            :
            <Button
              classNames={['linksListItem__btn linksListItem__btn-update']}
              onClick={() => switchMode(id)}
            >
              <i className="fas fa-edit"></i>
            </Button>
          }
        </div>
    
      </div>
    </div>
  );
};


LinksListItem.propTypes = {
  id: PropTypes.string.isRequired,
  descr: PropTypes.string,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  deleteLink: PropTypes.func.isRequired,
  updateLink: PropTypes.func.isRequired,
  switchMode: PropTypes.func.isRequired
};


export default LinksListItem;
