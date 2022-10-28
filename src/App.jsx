import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import AppRouter from './AppRouter.jsx';
import Header from './Header.jsx';
import ActivityFeeds from './components/ActivityFeeds.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {/* <div className="container-view">Some activities should be here</div> */}

        <Switch>
          <Route exact path="/" component={() => <h1>Home page</h1>} />
          <Route path="/inbox/:id" component={ActivityDetail} />
          <Route path="/inbox" component={ActivityFeeds} />
          <Route path="/allcalls" component={() => <h1>All Calls </h1>} />
          <Route path="/archived" component={() => <h1>Archived </h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;

/*
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
      <p>Nabil aircall</p>
      <p>Nabil assessment</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;


*/
