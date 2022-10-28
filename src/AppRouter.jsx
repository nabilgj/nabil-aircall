import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={<h1>Home Page</h1>} />
        <Route exact path="/activityfeed" component={<h1>Activity Page</h1>} />
        <Route
          exact
          path="/activitydetail"
          component={<h1>Activity Detail Page</h1>}
        />
        <Route exact path="/archived" component={<h1>Archived Page</h1>} />
      </Switch>
    </div>
  </BrowserRouter>
);

// into App
export default AppRouter;
