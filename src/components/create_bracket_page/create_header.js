import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Create from '../../modules/actions/createBracketPageActions';

import CreateCancelButton from './create_cancel_button';
import CreateCreateButton from './create_create_button';

class CreateHeader extends Component {
  componentWillMount() {
    this.props.dispatch(Create.randomTorName());
  }
  updateBrktName(event) {
    if (event.target.value === '') {
      this.props.dispatch(Create.randomTorName());
    } else {
      this.props.dispatch(Create.updateTorName(event.target.value));
    }
  }

  render() {
    const { brktName } = this.props.createBracket;
    return (
      <div id="createHeader">
        <div id="torName">
          <p>Name:</p>
          <input
            className="form-control"
            id="brktName"
            type="text"
            onChange={this.updateBrktName.bind(this)}
            placeholder={brktName}
          />
        </div>

        <div id="createHeaderBtns">
          <CreateCreateButton />
          <CreateCancelButton />
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

export default connect(mapStateToProps)(CreateHeader);
