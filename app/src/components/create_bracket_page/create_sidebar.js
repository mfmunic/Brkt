import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';

class CreateSidebar extends Component {
  render() {
    return (
      <nav className="col-lg-2 d-none d-md-block bg-light sidebar">
        <h1>Tournament Bracket Generator</h1>

        <div id="inputSel">
          <div id="highlight" />

          <p className="switch__label">Number</p>

          <label className="switch">
            <input className="inputBtn" type="checkbox" />
            <span className="slider" />
          </label>

          <p className="switch__label">Names</p>
        </div>

        <div className="form-group">
          <div id="inputNo">
            <p>Type number of Contestants</p>
            <input className="form-control" id="noOfCont" type="text" />
          </div>

          <div id="inputNames">
            <p>Type names of contestants seperated by &#13;</p>
            <textarea className="form-control" id="playNames" type="text" />
          </div>

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
    // publisherRoutes: state.app.publisherRoutes
  };
}

export default connect(mapStateToProps)(CreateSidebar);
