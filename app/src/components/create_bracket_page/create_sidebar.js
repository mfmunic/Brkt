import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as Create from '../../modules/actions/createBracketPageActions';

class CreateSidebar extends Component {
  componentWillMount() {
    this.props.dispatch(Create.updatePlayerNames('Marc\nEmily\nBennett\nIndy'));
  }

  updateNumber(event) {
    console.log('here');
    if (event.target.value > 1) {
      this.props.dispatch(Create.updateNoOfPlayers(event.target.value));
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
    return (
      <nav className="col-lg-2 d-none d-md-block bg-light sidebar">
        <h1>Tournament Bracket Generator</h1>

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
                  Enter<i className="material-icons md-18">keyboard_return</i>
                </strong>
              </label>
              <textarea
                className="form-control"
                id="playNames"
                rows="8"
                onChange={this.updateNames.bind(this)}
                defaultValue={playerNames.join('\n')}
              />
            </div>
          )}
          <button className="btn btn-primary" id="createBtn" type="submit">
            Create
          </button>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateSidebar);
