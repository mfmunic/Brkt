import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Variation extends Component {
  render() {
    const { destinationSubdomain } = this.props.data;
    const { experimentId } = this.props.data;
    const { pid } = this.props.data;
    const { staticUrl } = this.props.data;
    const { variationId } = this.props.data;
    const { variationPath } = this.props.data;
    const { vid } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Variation</h5>
          <p className="card-text">Subdomain: {destinationSubdomain}</p>
          <p className="card-text">experimentId: {experimentId}</p>
          <p className="card-text">pid: {pid}</p>
          <p className="card-text">staticUrl: {staticUrl}</p>
          <p className="card-text">variationId: {variationId}</p>
          <p className="card-text">variationPath: {variationPath}</p>
          <p className="card-text">vid: {vid}</p>
          <Link to="/publishers" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    publishers: state.app.publishers
  };
}

export default connect(mapStateToProps)(Variation);
