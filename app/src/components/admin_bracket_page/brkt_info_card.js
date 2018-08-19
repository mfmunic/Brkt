import React, { Component } from 'react';
import { connect } from 'react-redux';

class BrktInfoCard extends Component {
  render() {
    const own = this.props.data;
    console.log(own);
    return (
      <div className="card col-sm-12">
        <p>{own.total}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktInfoCard);
