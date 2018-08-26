import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AdminUpdateButton extends Component {
  goToUpdate(history, key, event) {
    this.props.history.push(`/update/${key}`);
  }

  render() {
    const { history } = this.props;
    const { brktKey } = this.props;
    return (
      <button
        className="btn btn-primary"
        onClick={this.goToUpdate.bind(this, history, brktKey)}>
        Update
      </button>
    );
  }
}

export default withRouter(AdminUpdateButton);
