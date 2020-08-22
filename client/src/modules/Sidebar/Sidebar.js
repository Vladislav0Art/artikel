import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
// components
import { List, Button, Panel, ColorsList, FormInput } from '../../components';
// api
import { getUserCategories } from '../../api/categories';
// styles
import './Sidebar.scss';
import './Sidebar-media.scss';


const Sidebar = (props) => {
  const [items, setItems] = React.useState([]);

  const [panelOpen, setPanelOpen] = React.useState(false);

  const [colors, setColors] = React.useState([
    { id: uuidv4(), active: false, color: 'brightGray' }, 
    { id: uuidv4(), active: false, color: 'darkGray' }, 
    { id: uuidv4(), active: false, color: 'brightGreen' }, 
    { id: uuidv4(), active: false, color: 'darkGreen' }, 
    { id: uuidv4(), active: false, color: 'blue' }, 
    { id: uuidv4(), active: false, color: 'pink' }, 
    { id: uuidv4(), active: false, color: 'purple' }, 
    { id: uuidv4(), active: false, color: 'coral' }
  ]);

  const [newCategory, setNewCategory] = React.useState({
    iconColor: null,
    title: ''
  });

  // componentDidMount hook
  React.useEffect(() => {
    // getting user's cats
    getUserCategories()
      .then(response => setItems(() => {
        const items = response.data.items;
        // setting to each cat active prop
        items.forEach(item => {
          item.active = false;
        });

        return items;
      }))
      .catch(err => console.log(err))
  }, []);


  // ------------- logs ------------- //
  React.useEffect(() => {
    console.log(items)
  }, [items]);

  React.useEffect(() => {
    console.log(newCategory)
  }, [newCategory]);
  
  React.useEffect(() => {
    console.log(colors)
  }, [colors]);
  // ------------- logs ------------- //


  // deleting item from state
  const deleteItem = (id) => {
    setItems((prevItems) => (
      prevItems.filter(item => item._id !== id)
    ));
  };


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


  // creating new category 
  const createNewCategory = () => {
    // if title is not an empty string
    if(newCategory.title !== '') {
      setItems((prevItems) => [...prevItems, { ...newCategory, active: false, _id: uuidv4() }]);
      
      setNewCategory({
        title: '',
        iconColor: null
      });

      setColors((prevColors) => prevColors.map(item => {
        item.active = false;
        return item;
      }));
    }
    else {
      // notification
      alert('Category must have a title');
    }
  };


  return (
    <div className={ClassNames("articles__sidebar", props.classNames)}>

      <h4 className="articles__title">
        <i className="fas fa-list-ul"></i>
        <span>{ props.title }</span>
      </h4>

      <List 
        items={items}
        deleteItem={deleteItem}
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

    </div>
  );
};


Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  classNames: PropTypes.array
};


export default Sidebar;