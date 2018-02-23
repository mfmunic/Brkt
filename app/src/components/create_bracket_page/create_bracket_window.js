import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';

class CreateBracketWindow extends Component {
  render() {
    return <div className="brktWindow col-sm-9 align-self-start" />;
  }
}

function mapStateToProps(state) {
  return {
    // publisherRoutes: state.app.publisherRoutes
  };
}

export default connect(mapStateToProps)(CreateBracketWindow);
