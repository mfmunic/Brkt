import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Create from '../../modules/actions/createBracketPageActions';

class CreateCreateButton extends Component {
  createBracket(brktInfo, brktName, event) {
    this.props.dispatch(Create.addBrkt(brktInfo, brktName));
  }

  render() {
    const { brktInfo, brktName, noOfPlayers } = this.props.createBracket;

    return (
      <div>
        {noOfPlayers > 1 ? (
          <button
            className="btn btn-primary"
            id="createBtn"
            type="submit"
            onClick={this.createBracket.bind(this, brktInfo, brktName)}>
            Create Bracket
          </button>
        ) : (
          <button
            className="btn btn-primary"
            id="createBtn"
            type="submit"
            onClick={this.createBracket.bind(this, brktInfo, brktName)}
            disabled>
            Create Bracket
          </button>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateCreateButton);
