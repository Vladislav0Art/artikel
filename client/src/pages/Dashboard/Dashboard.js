import React from 'react';
// modules
import { Sidebar } from '../../modules';


const Dashboard = () => {
  const [sidebarView, setSidebarView] = React.useState(true);

  const toggleSidebarView = () => {
    setSidebarView(prevView => !prevView);
  }

  return (
    <React.Fragment>
      <div className="articles">

        <div className="articles__openerBlock">
          <button
            className="articles__opener"
            onClick={toggleSidebarView}
          >
            <i className="fas fa-th"></i>
        </button>
        </div>

        <Sidebar title="All categories" classNames={sidebarView ? ['articles__sidebar-open'] : [] } />

        <div className="articles__content">
          content
        </div>
      </div>
    </React.Fragment>
  );
};


export default Dashboard;