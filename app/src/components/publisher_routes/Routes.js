import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../navbar/Nav';
import { fetchPublisherRoutes, resetPublisherOne } from '../../modules/actions';
import TempDataRow from './TempDataRow';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { publisher: [] };
  }

  variationCount(varArray) {
    if (varArray.length === 1) {
      if (varArray[0].staticUrl === '') {
        return `Dynamic Url`;
      }
      return varArray[0].staticUrl;
    } else {
      return `${varArray.length} variations`;
    }
  }

  componentWillMount() {
    const currentUrl = window.location.href;
    const currUrlArr = currentUrl.split('/');
    const pubId = currUrlArr[currUrlArr.length - 1];

    this.props.dispatch(fetchPublisherRoutes(pubId));
  }
  componentDidUpdate(prev) {
    console.log('did updated routes', prev);
  }
  componentWillReceiveProps(nex) {
    console.log(nex);
    if (typeof nex.publisherRouteOne === 'object') {
      this.props.dispatch(fetchPublisherRoutes(nex.match.params.id));
      this.props.dispatch(resetPublisherOne());
    }
    console.log('updated routes', nex);
  }
  render() {
    const currentUrl = window.location.href;
    const currUrlArr = currentUrl.split('/');
    const pubId = currUrlArr[currUrlArr.length - 1];
    const routePath = `/create-route/${pubId}`;
    const publisherRoutes2 = this.props.publisherRoutes || [];
    const publisherRoutes = publisherRoutes2.filter(data => {
      return data._id;
    });
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="jumbotron">
            <h1>Routes</h1>
          </div>
          <Link to={routePath} className="btn btn-primary">
            Create Route
          </Link>
          <div id="accordion">
            {publisherRoutes.map(data => {
              const tagId = `heading${data._id}`;
              const controlsId = `collapse${data._id}`;
              const dataTarget = `#${controlsId}`;
              return (
                <div className="card" key={data._id}>
                  <div className="card-header" id={tagId} rowpos={data._id}>
                    <h5 className="mb-0">
                      <div
                        data-toggle="collapse"
                        data-target={dataTarget}
                        aria-expanded="true"
                        aria-controls={controlsId}>
                        {data._id}
                        <span> Description: {data.obj.description}</span>
                      </div>
                    </h5>
                  </div>
                  <TempDataRow
                    datatarget={dataTarget}
                    ariacontrols={controlsId}
                    publisherid={data._id}
                    publisherobj={data.obj}
                    arialabelledby={tagId}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    publisherRoutes: state.app.publisherRoutes,
    publisherRouteOne: state.app.publisherRouteOne,
    variationForm: state.app.variationForm
  };
}

export default connect(mapStateToProps)(Routes);
