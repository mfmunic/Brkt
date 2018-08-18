import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/App.css';
import NewPublisher from './components/new_publisher/NewPublisher';
import Routes from './components/publisher_routes/Routes';
import CreateRoute from './components/create_route/CreateRoute';
import CreateBracketPage from './components/create_bracket_page/create_bracket_page';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/'} component={CreateBracketPage} />
          <Route path={'/route/:id'} component={Routes} />
          <Route path={'/create-route/:id'} component={CreateRoute} />
          <Route path={'/new-publisher'} component={NewPublisher} />
        </Switch>
      </Router>
    );
  }
}

export default App;
