import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CreateMatch from './create_matches';

class CreateHeader extends Component {
  render() {
    const { brktName } = this.props.createBracket;
    return (
      <div id="createHeader">
        <h1>{brktName}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateHeader);
