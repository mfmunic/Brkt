import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Create from '../../modules/actions/createBracketPageActions';
// import _ from 'lodash';

class CreateSidebar extends Component {
  componentWillMount() {
    this.props.dispatch(Create.resetState());
    this.props.dispatch(Create.updateNoOfPlayers(0));
  }

  updateNumber(event) {
    const noCheck = +event.target.value;
    if (noCheck && noCheck <= 256) {
      this.props.dispatch(Create.updateNoOfPlayers(event.target.value));
    } else {
      this.props.dispatch(Create.updateNoOfPlayers(0));
    }
  }

  updateNames(event) {
    this.props.dispatch(Create.updatePlayerNames(event.target.value));
  }

  switchInput(names, noOf, event) {
    this.props.dispatch(Create.switchInput(event.target.value, noOf, names));
  }

  render() {
    const { inputSwitch, playerNames, noOfPlayers } = this.props.createBracket;
    const names = playerNames.join('\n');

    return (
      <nav className="col-lg-2 d-none d-md-block sidebar">
        <div id="title">
          <h1 id="torTitle">
            <strong>T</strong>
            ournament
          </h1>
          <h1 id="braTitle">
            <strong>B</strong>
            racket
          </h1>
          <h1 id="genTitle">
            <strong>G</strong>
            enerator
          </h1>
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
        <div>
          {inputSwitch === 'Number' ? (
            <label htmlFor="playNames" className="createIns">
              Type number of Contestants
            </label>
          ) : (
            <label htmlFor="playNames" className="createIns">
              Separate names by{' '}
              <strong>
                Enter
                <i className="material-icons md-18">keyboard_return</i>
              </strong>
            </label>
          )}
        </div>

        <div>
          {inputSwitch === 'Number' ? (
            <div id="inputNo">
              <input
                className="form-control"
                id="noOfCont"
                type="number"
                min="2"
                max="256"
                onChange={this.updateNumber.bind(this)}
                defaultValue={
                  playerNames.length === 0 ? '' : playerNames.length
                }
              />
            </div>
          ) : (
            <div id="inputNames">
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
