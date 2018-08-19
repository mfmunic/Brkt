import React, { Component } from 'react';
import { connect } from 'react-redux';
// import _ from 'lodash';

class BrktsOwnedList extends Component {
  render() {
    const { brktsOwned } = this.props.brktsOwned;
    return <div className="brktsOwned">Hello, World!</div>;
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktsOwnedList);
