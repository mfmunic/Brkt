import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateMatch extends Component {
  render() {
    const { data } = this.props;
    const matchStyle = {
      top: data.yLoc,
      left: data.xLoc
    };
    return (
      <div className="match" id={`match${data.match}`} style={matchStyle} />
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateMatch);
