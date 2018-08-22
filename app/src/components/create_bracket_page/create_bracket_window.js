import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CreateMatch from './create_matches';
import CreateHeader from './create_header';

class CreateBracketWindow extends Component {
  render() {
    const { brktInfo } = this.props.createBracket;
    const bBoxStyle = {
      width: brktInfo.box.width,
      height: brktInfo.box.height
    };
    const polylineStyle = {
      fill: 'none',
      stroke: 'black'
    };
    return (
      <div className="brktWindow col-sm align-self-start">
        <CreateHeader />
        <div className="brktBox" id="bBox" style={bBoxStyle}>
          {_.map(brktInfo.matches, match => {
            return (
              <CreateMatch
                key={match.match}
                data={{
                  ...match,
                  width: brktInfo.box.rndWid,
                  height: brktInfo.box.rndHgt
                }}
              />
            );
          })}
          <svg id="svgBox" width={bBoxStyle.width} height={bBoxStyle.height}>
            {_.map(brktInfo.svgArr, (line, index) => {
              return (
                <polyline points={line} key={index} style={polylineStyle} />
              );
            })}
          </svg>
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
