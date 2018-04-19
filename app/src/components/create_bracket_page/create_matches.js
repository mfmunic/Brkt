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
        <div className="matchNo col-2">{match}</div>
        <div className="seeds col-2">
          <div className="seed1">{player1seed}</div>
          <div className="seed2">{player2seed}</div>
        </div>
        <div className="players col-8">
          <div className="play1" />
          <div className="play2" />
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
