import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import * as Create from '../../modules/actions/createBracketPageActions';

class CreateSidebar extends Component {
  updateNumber(event) {
    this.props.dispatch(Create.updateNoOfPlayers(event.target.value));
  }

  updateNames(event) {
    this.props.dispatch(Create.updatePlayerNames(event.target.value));
  }

  switchInput(event) {
    this.props.dispatch(Create.switchInput(event.target.value));
  }

  render() {
    const { inputSwitch } = this.props.createBracket;
    return (
      <nav className="col-lg-2 d-none d-md-block bg-light sidebar">
        <h1>Tournament Bracket Generator</h1>

        <div id="inputSel">
          <div id="highlight" />

          <p className="switch__label">Number</p>

          <label className="switch">
            <input
              className="inputBtn"
              type="checkbox"
              value={inputSwitch}
              onClick={this.switchInput.bind(this)}
            />
            <span className="slider" />
          </label>

          <p className="switch__label">Names</p>
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
              <p>Type names of contestants seperated by &#13;</p>
              <textarea
                className="form-control"
                id="playNames"
                type="text"
                onChange={this.updateNames.bind(this)}
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
