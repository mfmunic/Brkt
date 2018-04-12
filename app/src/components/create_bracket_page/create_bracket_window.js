import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import CreateMatch from './create_matches';
// import { Link } from 'react-router-dom';
// import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';

// var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     svg.setAttribute('id', 'svgBox');
//     svg.setAttribute('width', bracket.brktBox.width);
//     svg.setAttribute('height', bracket.brktBox.height);
//     svg.setAttributeNS(
//       'http://www.w3.org/2000/xmlns/',
//       'xmlns:xlink',
//       'http://www.w3.org/1999/xlink'
//     );

// document.getElementById('bBox').appendChild(svg);
class CreateBracketWindow extends Component {
  render() {
    const { brktInfo } = this.props.createBracket;
    const bBoxStyle = {
      width: brktInfo.box.width,
      height: brktInfo.box.height
    };
    console.log(brktInfo);
    return (
      <div className="brktWindow col-sm-9 align-self-start">
        <div className="brktBox" id="bBox" style={bBoxStyle}>
          {_.map(brktInfo.matches, match => {
            return <CreateMatch key={match.match} data={match} />;
          })}
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
