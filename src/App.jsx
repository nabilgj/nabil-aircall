import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import AppRouter from './AppRouter.jsx';
import Header from './Header.jsx';
import AllCalls from './components/AllCalls.jsx';
import ActivityFeeds from './components/ActivityFeeds.jsx';
import ActivityDetail from './components/ActivityDetail.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        {/* <div className="container-view">Some activities should be here</div> */}

        <Switch>
          <Route exact path="/" component={AllCalls} />
          <Route path="/inbox/:id" component={ActivityDetail} />
          <Route path="/inbox" component={ActivityFeeds} />
          <Route path="/archived" component={() => <h1>Archived </h1>} />
        </Switch>

        <Footer />
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
