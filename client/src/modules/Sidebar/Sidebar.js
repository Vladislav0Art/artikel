import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
// components
import { List, Button, Panel, ColorsList, FormInput } from '../../components';
// styles
import './Sidebar.scss';
import './Sidebar-media.scss';


const Sidebar = (props) => {
  const DEFAULT_COLOR = 'darkGray';

  const [panelOpen, setPanelOpen] = React.useState(false);

  const [colors, setColors] = React.useState([ 
    { id: uuidv4(), active: true, color: DEFAULT_COLOR },
    { id: uuidv4(), active: false, color: 'brightGray' }, 
    { id: uuidv4(), active: false, color: 'brightGreen' }, 
    { id: uuidv4(), active: false, color: 'darkGreen' }, 
    { id: uuidv4(), active: false, color: 'blue' }, 
    { id: uuidv4(), active: false, color: 'pink' }, 
    { id: uuidv4(), active: false, color: 'purple' }, 
    { id: uuidv4(), active: false, color: 'coral' }
  ]);

  const [newCategory, setNewCategory] = React.useState({
    iconColor: DEFAULT_COLOR,
    title: ''
  });

  
  // opening panel for creating new categories
  const openPanel = () => {
    setPanelOpen(true);
  };

  // closing panel for creating new categories
  const closePanel = () => {
    setPanelOpen(false);
  };


  // changing the color of a new category
  const setColor = (id, color) => {
    setNewCategory({
      ...newCategory,
      iconColor: color
    });

    setColors((prevColors) => prevColors.map(item => {
      if(item.id === id) {
        item.active = true;
      }
      else {
        item.active = false;
      }

      return item;
    }));
  };

  // changing the title of a new category
  const setTitle = (event) => {
    event.persist();

    setNewCategory({
      ...newCategory,
      title: event.target.value
    });
  };


  const createNewCategory = () => {
    props.createNewCategory(newCategory, () => {

      // set state cat to default values
      setNewCategory({
        title: '',
        iconColor: DEFAULT_COLOR
      });
      
      // setting each color in state to non-active mode unless it is the default color
      setColors((prevColors) => prevColors.map(item => {
        if(item.color === DEFAULT_COLOR) {
          item.active = true;
        }
        else {
          item.active = false;
        }

        return item;
      }));

    });
  }

  
  return (
    <div className={ClassNames("articles__sidebar", props.classNames)}>
      
      <h4 className="articles__title">
        <i className="fas fa-list-ul"></i>
        <span>{ props.title }</span>
      </h4>

      <List 
        items={props.items}
        deleteItem={props.deleteUserCategory}
        setItemToActive={props.setItemToActive}
        classNames={['articles__list']} 
      />

      <Button
        text="Add new category"
        classNames={['articles__createBtn']}
        onClick={openPanel}
      />

      {
        panelOpen ? 
          <Panel 
            closePanel={closePanel}
            classNames={['articles__panel']}
          >

            <FormInput 
              label={null}
              name="title"
              type="text"
              placeholder="Category name:"
              onChange={setTitle}
              classNames={['articles__input']}
              blockClassNames={['articles__inputBlock']}
              value={newCategory.title}
            />

            <ColorsList
              colors={colors}
              setColor={setColor}
            />

            <Button 
              type="button"
              text="Create"
              onClick={createNewCategory}
              classNames={['articles__createBtn']}
            />

          </Panel>
        :
          null
      }

      <Button
        text="Close sidebar"
        type="button"
        classNames={['articles__closeBtn']}
        onClick={props.closeSidebarPanel}
      />

    </div>
  );
};


Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  classNames: PropTypes.array,
  closeSidebarPanel: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  createNewCategory: PropTypes.func.isRequired,
  deleteUserCategory: PropTypes.func.isRequired,
  setItemToActive: PropTypes.func.isRequired
};


export default Sidebar;