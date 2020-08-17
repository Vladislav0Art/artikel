import React from 'react';
import PropTypes from 'prop-types';
// components
import { List, Button, Panel } from '../../components';
// styles
import './Sidebar.scss';


const Sidebar = (props) => {
  const [items, setItems] = React.useState([
    {
      _id: '1',
      title: 'New articles set 1',
      active: false,
    },
    {
      _id: '2',
      title: 'New articles set 2',
      active: true,
      iconColor: 'brightGreen'
    },
    {
      _id: '3',
      title: 'New articles set 3',
      active: false,
      iconColor: 'pink'
    },
    {
      _id: '4',
      title: 'New articles set 4',
      active: false,
      iconColor: 'darkGray'
    },
    {
      _id: '5',
      title: 'New articles set 5',
      active: false,
      iconColor: 'brightGray'
    },
    {
      _id: '6',
      title: 'New articles set 6',
      active: false,
      iconColor: 'blue'
    }
  ]);

  const [panelOpen, setPanelOpen] = React.useState(true);


  React.useEffect(() => {
    console.log(items)
  }, [items]);
  

  // setting item to active state
  const makeItemActive = (id) => {
    setItems(prevItems => (
      prevItems.map(item => {
        if(item._id === id) {
          item.active = true;
        }
        return item;
      })
    ));
  };


  // unsetting all items from being active
  const makeItemUnactive = (id) => {
    setItems(prevItems => (
      prevItems.map(item => {
        if(item._id === id) {
          item.active = false;
        }

        return item;
      })
    ));
  };


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


  return (
    <div className="articles__sidebar">

      <h4 className="articles__title">
        <i className="fas fa-list-ul"></i>
        <span>{ props.title }</span>
      </h4>

      <List 
        items={items}
        deleteItem={deleteItem}
        makeItemActive={makeItemActive}
        makeItemUnactive={makeItemUnactive}
        classNames={['articles__list']} 
      />

      <Button
        text="Add new category"
        onClick={openPanel}
      />

      {
        panelOpen ? 
          <div>
            <Panel 
              
            />
          </div>
        :
          null
      }

    </div>
  );
};


Sidebar.propTypes = {
  title: PropTypes.string.isRequired
};


export default Sidebar;