import React from 'react';
// modules
import { Sidebar } from '../modules';


const Dashboard = () => {
  return (
    <div className="articles">
      <Sidebar title="All articles" />

      <div className="articles__content">
        content
      </div>
    </div>
  );
};


export default Dashboard;