import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Create from '../../modules/actions/createBracketPageActions';
import CreateCreateButton from './create_create_button';
import CreateCancelButton from './create_cancel_button';
import _ from 'lodash';

class CreateSidebar extends Component {
  componentWillMount() {
    this.props.dispatch(Create.updateNoOfPlayers(0));
    this.props.dispatch(Create.updatePlayerNames(''));
    this.props.dispatch(Create.switchInput('Names', 0, ''));
  }

  updateNumber(event) {
    this.props.dispatch(Create.updateNoOfPlayers(event.target.value));
  }

  updateNames(event) {
    this.props.dispatch(Create.updatePlayerNames(event.target.value));
  }

  updateBrktName(event) {
    this.props.dispatch(Create.updateTorName(event.target.value));
  }

  switchInput(names, noOf, event) {
    this.props.dispatch(Create.switchInput(event.target.value, noOf, names));
  }

  inputNames(names, event) {
    names = _.map(names, (name, index) => {
      if (name === '') {
        name = `<<Player ${index + 1}>>`;
        return name;
      }
    });
    names = names.join('\n');
    return names;
  }

  render() {
    const { inputSwitch, playerNames, noOfPlayers } = this.props.createBracket;
    const names = this.inputNames(playerNames);

    return (
      <nav className="col-lg-2 d-none d-md-block bg-light sidebar">
        <h1>Tournament Bracket Generator</h1>

        <div id="inputNo">
          <p>Tournament Name</p>
          <input
            className="form-control"
            id="brktName"
            type="text"
            onChange={this.updateBrktName.bind(this)}
          />
        </div>

        <div id="inputSel">
          <div id="highlight" />

          <p className="switch_label">Number</p>

          <label className="switch">
            <input
              className="inputBtn"
              type="checkbox"
              value={inputSwitch}
              onClick={this.switchInput.bind(this, playerNames, noOfPlayers)}
            />
            <span className="slider" />
          </label>

          <p className="switch_label">Names</p>
        </div>

        <div className="form-group">
          {inputSwitch === 'Number' ? (
            <div id="inputNo">
              <p>Type number of Contestants</p>
              <input
                className="form-control"
                id="noOfCont"
                type="text"
                onChange={this.updateNumber.bind(this)}
              />
            </div>
          ) : (
            <div id="inputNames">
              <label htmlFor="playNames">
                Type names of contestants seperated by{' '}
                <strong>
                  Enter
                  <i className="material-icons md-18">keyboard_return</i>
                </strong>
              </label>

              <div>
                <textarea
                  className="form-control"
                  id="playNames"
                  rows="8"
                  onChange={this.updateNames.bind(this)}
                  defaultValue={names}
                />

                {names.includes('<<') ? (
                  <p>
                    <small>{'Replace lines containing <<>>'}</small>
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          )}

          {noOfPlayers > 1 ? <CreateCreateButton /> : ''}
          <CreateCancelButton />
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket,
    brktsOwned: state.brktsOwned
  };
}

export default connect(mapStateToProps)(CreateSidebar);
