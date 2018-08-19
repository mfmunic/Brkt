import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './css/App.css';
import CreateBracketPage from './components/create_bracket_page/create_bracket_page';
import BrktAdmin from './components/admin_bracket_page/admin_bracket_page';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/create'} component={CreateBracketPage} />
          <Route path={'/'} component={BrktAdmin} />
        </Switch>
      </Router>
    );
  }
}

export default App;
