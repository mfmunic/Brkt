import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../navbar/Nav';
import { fetchPublishers } from '../../modules/actions';
import './Pub.css';
class Publisher extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(fetchPublishers());
  }

  render() {
    const { publishers } = this.props;
    return (
      <div>
        <Nav page="pub" />
        <div className="container">
          <div className="jumbotron">
            <h1>Publishers</h1>
          </div>
          <ul className="list-group" id="pubList">
            {publishers.length > 1 &&
              publishers.map(data => {
                const path = `/route/${data._id}`;
                return (
                  <li key={data._id}>
                    <Link
                      to={path}
                      className="list-group-item list-group-item-action">
                      {data.obj.name} -{' '}
                      <span className="pubId">{data._id}</span>
                    </Link>
                  </li>
                );
              })}
            <li>
              <Link to="/new-publisher"> + New Publisher</Link>
            </li>
          </ul>
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

export default connect(mapStateToProps)(Publisher);
