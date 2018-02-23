import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateSidebar from './create_sidebar';
import CreateBracketWindow from './create_bracket_window';
// import { Link } from 'react-router-dom';
// import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';

class CreateBracketPage extends Component {
  render() {
    return (
      <div className="row cbrktpg">
        <CreateSidebar />
        <CreateBracketWindow />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // publisherRoutes: state.app.publisherRoutes
  };
}

export default connect(mapStateToProps)(CreateBracketPage);
