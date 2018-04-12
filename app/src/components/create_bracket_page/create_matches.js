import React, { Component } from 'react';
import { connect } from 'react-redux';
// import CreateSidebar from './create_sidebar';
// import CreateBracketWindow from './create_bracket_window';
// import { Link } from 'react-router-dom';
// import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';

class CreateMatch extends Component {
  render() {
    const { brktInfo } = this.props.createBracket;
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
