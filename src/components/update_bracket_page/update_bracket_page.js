import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrktsOwnedList from './brkts_owned_list';
import UpdateHeader from './update_header';
import * as Update from '../../modules/actions/updateBracketPageActions';
import { brktRef } from '../../config/firebase';

class BrktUpdate extends Component {
  componentWillMount() {
    const path = window.location.pathname;
    const pathArr = path.split('/');
    const brktKey = pathArr[pathArr.length - 1];
    brktRef
      .child('tests')
      .child(brktKey)
      .on('value', snapshot =>
        this.props.dispatch(Update.updateBrkt(snapshot.val(), brktKey))
      );
  }

  render() {
    return (
      <div className="adminPg">
        <UpdateHeader />
        <BrktsOwnedList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(BrktUpdate);
