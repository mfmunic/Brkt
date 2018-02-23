import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../publishers/Pub.css';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/publishers" className="nav-link">
                  Publishers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/new-publisher" className="nav-link">
                  New Publisher
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
