import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreateCancelButton extends Component {
  goToCreate(history, event) {
    this.props.history.push('/admin');
  }

  render() {
    const { history } = this.props;
    return (
      <button
        className="btn btn-primary"
        onClick={this.goToCreate.bind(this, history)}>
        Cancel
      </button>
    );
  }
}

export default withRouter(CreateCancelButton);
