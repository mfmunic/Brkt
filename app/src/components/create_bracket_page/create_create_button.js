import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Create from '../../modules/actions/createBracketPageActions';

class CreateCreateButton extends Component {
  createBracket(brktInfo, brktNo, event) {
    this.props.dispatch(Create.addBrkt(brktInfo, brktNo));
  }

  render() {
    const { brktInfo } = this.props.createBracket;

    const { owned } = this.props.brktsOwned;
    const brktNo = owned.length;
    console.log(brktNo);

    return (
      <button
        className="btn btn-primary"
        id="createBtn"
        type="submit"
        onClick={this.createBracket.bind(this, brktInfo, brktNo)}>
        Create Bracket
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket,
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(CreateCreateButton);
