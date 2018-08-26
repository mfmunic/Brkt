import React, { Component } from 'react';
import { connect } from 'react-redux';

// import AdminCreateButton from './admin_create_button';
import Title from '../utils/title';

class UpdateHeader extends Component {
  render() {
    return (
      <nav className="nav">
        <Title />
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    routing: state.routing
  };
}

export default connect(mapStateToProps)(UpdateHeader);
