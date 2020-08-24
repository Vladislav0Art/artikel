import React from 'react';
// components
import { Button } from '../../components';
// modules
import { Sidebar, DashboardContent } from '../../modules';
// api
import { getUserCategories, postNewCategory, deleteCategory } from '../../api/categories';
// styles
import './Dashboard.scss';
import './Dashboard-media.scss';


const Dashboard = () => {
  const [items, setItems] = React.useState([]);
  const [activeItem, setActiveItem] = React.useState(null);
  const [sidebarView, setSidebarView] = React.useState(true);

  // setting an opening class to sidebar
  const openSidebarPanel = () => {
    setSidebarView(true);
  };


  // removing an opening class to sidebar
  const closeSidebarPanel = () => {
    setSidebarView(false);
  };

  
  // checking if click was not made on sidebar
  const handleClick = (e) => {
    const target = e.target;

    if(!target.closest('.articles__sidebar') && !target.closest('.articles__openerBlock')) {
      setSidebarView(false);
    }
  };


  // getting users's cats from db (componentDidMount-hook)
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


  // creating new category 
  const createNewCategory = (newCategory, callback) => {
    // if title is not an empty string
    if(newCategory.title !== '') {
      postNewCategory(newCategory)
        .then(response => {
          const item = response.data.item;
          // update state cats
          setItems((prevItems) => [...prevItems, { ...item, active: false }]);
          
          // firing callback function
          callback();

        })
        .catch(err => console.log(err));
    }
    else {
      // notification
      alert('Category must have a title');
    }
  };


  // deleting category
  const deleteUserCategory = (id) => {
    // deleting from db
    deleteCategory(id)
      .then(response => {
        // deleting from state
        setItems((prevItems) => (
          prevItems.filter(item => item._id !== id)
        ));
      })
      .catch(err => console.log(err));
  };


  // setting active property of item to true if ids match
  const setItemToActive = (id) => {
    setItems(prevItems => prevItems.map(item => {
      if(item._id === id) {
        item.active = true;
        // setting the active item in state
        setActiveItem(item);
      }
      else {
        item.active = false;
      }

      return item;
    }));
  };


  
  return (
    <React.Fragment>
      <div className="wrapper" onClick={handleClick}>
        <div className="articles">

          <div className="articles__openerBlock">
            <Button 
              text="Open sidebar"
              type="button"
              onClick={openSidebarPanel}
            />
          </div>

          <Sidebar 
            title="All categories" 
            classNames={sidebarView ? ['articles__sidebar-open'] : [] }
            closeSidebarPanel={closeSidebarPanel}
            items={items}
            createNewCategory={createNewCategory}
            deleteUserCategory={deleteUserCategory}
            setItemToActive={setItemToActive}
          />

          <DashboardContent
            activeItem={activeItem}
          />
        </div>
      </div>
    </React.Fragment>
  );
};


export default Dashboard;