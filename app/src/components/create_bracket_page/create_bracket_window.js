import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CreateMatch from './create_matches';

class CreateBracketWindow extends Component {
  render() {
    const { brktInfo } = this.props.createBracket;
    const bBoxStyle = {
      width: brktInfo.box.width,
      height: brktInfo.box.height
    };
    return (
      <div className="brktWindow col-sm-9 align-self-start">
        <div className="brktBox" id="bBox" style={bBoxStyle}>
          {_.map(brktInfo.matches, match => {
            return <CreateMatch key={match.match} data={match} />;
          })}
          <svg id="svgBox" width={bBoxStyle.width} height={bBoxStyle.height} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createBracket: state.createBracket
  };
}

export default connect(mapStateToProps)(CreateBracketWindow);
