import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminCreateButton from './admin_create_button';

class AdminHeader extends Component {
  render() {
    return (
      <nav className="nav">
        <h1>Tournament Bracket Generator</h1>
        <AdminCreateButton />
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(AdminHeader);
