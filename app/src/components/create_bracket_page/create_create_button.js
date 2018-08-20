import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Create from '../../modules/actions/createBracketPageActions';

class CreateCreateButton extends Component {
  createBracket(brktInfo, event) {
    this.props.dispatch(Create.addBrkt(brktInfo));
  }

  render() {
    const { brktInfo } = this.props.createBracket;

    return (
      <button
        className="btn btn-primary"
        id="createBtn"
        type="submit"
        onClick={this.createBracket.bind(this, brktInfo)}>
        Create Bracket
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateCreateButton);
