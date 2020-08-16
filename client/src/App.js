import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// pages
import { Dashboard } from './pages';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route  path='/' exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
