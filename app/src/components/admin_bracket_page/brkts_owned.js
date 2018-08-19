import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

class BrktsOwned extends Component {
  render() {
    return <div className="brktsOwned">Hello, World!</div>;
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktsOwned);
