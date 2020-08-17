import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// pages
import { Dashboard, Login, Register } from '../../pages';
// utils
import { PrivateRoute } from '../../utils';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
