import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import BrktInfoCard from './brkt_info_card';

class BrktsOwnedList extends Component {
  render() {
    const owns = this.props.brktsOwned.owned;
    return (
      <div className="brktsOwned">
        {_.map(owns, (own, index) => {
          return (
            <div key={index}>
              <BrktInfoCard data={own} />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktsOwnedList);
