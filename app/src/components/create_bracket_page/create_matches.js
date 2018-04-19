import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateMatch extends Component {
  render() {
    const {
      yLoc,
      xLoc,
      width,
      height,
      match,
      player1seed,
      player2seed
    } = this.props.data;
    const matchStyle = {
      top: yLoc,
      left: xLoc,
      width: width,
      height: height
    };
    return (
      <div className="match" id={`match${match}`} style={matchStyle}>
        <div>
          <div>{player1seed}</div>
          <div>{player2seed}</div>
        </div>
        <div>
          <div>{match}</div>
          <div>{player2seed}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateMatch);
