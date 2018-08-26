import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateSidebar from './create_sidebar';
import CreateBracketWindow from './create_bracket_window';
import * as Admin from '../../modules/actions/adminBracketPageActions';

class CreateBracketPage extends Component {
  componentWillMount() {
    this.props.dispatch(Admin.fetchBrkts());
  }

  render() {
    return (
      <div className="cbrktpg">
        <CreateSidebar />
        <CreateBracketWindow />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateBracketPage);
