import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// styles
import './Panel.scss';



const Panel = ({ children, classNames, closePanel }) => {
  return (
    <div className={ClassNames("panel", classNames)}>
      <div className="panel__content">
        
        <button type="button" className="panel__close" onClick={closePanel}>
          <i className="fas fa-times"></i>
        </button>

        { children }
      </div>
    </div>
  );
};


Panel.propTypes = {
  children: PropTypes.any.isRequired,
  closePanel: PropTypes.func.isRequired,
  classNames: PropTypes.array
};

export default Panel;
