import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrktsOwned from './brkts_owned';
import * as Admin from '../../modules/actions/adminBracketPageActions';

class BrktAdmin extends Component {
  componentWillMount() {
    this.props.dispatch(Admin.fetchBrkts());
  }

  render() {
    return (
      <div className="adminPg">
        <BrktsOwned />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktAdmin);
