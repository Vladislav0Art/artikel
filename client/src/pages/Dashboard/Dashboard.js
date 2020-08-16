import React from 'react';
// modules
import { Sidebar } from '../../modules';
// styles
import './Dashboard.scss';


const Dashboard = (props) => {
  return (
    <div className="articles">
      <Sidebar title={'All articles'} />

      <div className="articles__content">
        content
      </div>
    </div>
  );
};

export default Dashboard;