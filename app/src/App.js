import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import './css/App.css';
import CreateBracketPage from './components/create_bracket_page/create_bracket_page';
import BrktAdmin from './components/admin_bracket_page/admin_bracket_page';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/create'} component={CreateBracketPage} />
          <Route path={'/admin'} component={BrktAdmin} />
          <Redirect to={'/admin'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
