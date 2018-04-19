import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../navbar/Nav';
import _ from 'lodash';
import {
  addRouteVariationForm,
  createRouteForm,
  addPublisherDataToRoute
} from '../../modules/actions';

class CreateRoute extends Component {
  constructor(props) {
    super(props);
    const currentUrl = window.location.href;
    const currUrlArr = currentUrl.split('/');
    const pubId = currUrlArr[currUrlArr.length - 1];
    const publisherData = _.filter(
      this.props.publishers,
      publisher => publisher._id === pubId
    );
    const sendData = this.props.createRouteForm;
    sendData.publisherId = publisherData[0].obj.id;
    sendData.publisherName = publisherData[0].obj.name;
    sendData.publisherDescription = publisherData[0].obj.description;

    console.log('construc ', sendData);
    this.props.dispatch(addPublisherDataToRoute(sendData));
  }
  submitForm(event) {
    event.preventDefault();
    console.log(this.props);
  }
  formUpdate(vari, index, event) {
    event.preventDefault();
    this.props.createRouteForm.variations[index][event.target.id] =
      event.target.value;
    this.props.dispatch(createRouteForm(this.props.createRouteForm.variations));
  }

  deviceTypeChange(vari, index, event) {
    // event.preventDefault();
    const r = this.props.createRouteForm;
    console.log(r.checked[index]);
    if (event.target.checked) {
      if (!r.checked[index]) {
        r.checked.push([]);
      }

      r.checked[index].push(event.target.value);
      this.props.dispatch(addPublisherDataToRoute(r));
    } else {
      r.checked[index] = _.filter(
        r.checked[index],
        type => type !== event.target.value
      );
      this.props.dispatch(addPublisherDataToRoute(r));
    }
  }

  addVariation(event) {
    event.preventDefault();
    // this.event.target;
    console.log('add variation', event.target);
    console.log(this.props.createRouteForm.variations);
    this.props.dispatch(
      addRouteVariationForm(this.props.createRouteForm.variations)
    );
  }
  render() {
    const { variationForm } = this.props;
    const { createRouteForm } = this.props;
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="jumbotron">
            <h1>Create Route</h1>
          </div>
          <div className="container">
            <form onSubmit={this.submitForm.bind(this)}>
              <div className=" col-sm-6">
                <label htmlFor="routeId">route ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="routeId"
                  ref="routeId"
                  required
                />
              </div>

              <div className=" col-sm-6">
                <label htmlFor="description">Route Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  ref="description"
                />
              </div>

              <div className="card-group">
                {_.map(createRouteForm.variations, (variation, index) => {
                  return (
                    <div
                      key={index}
                      className="card"
                      style={{ maxWidth: 300, padding: 10 }}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="destinationSubdomain"
                          name="destinationSubdomain"
                          placeholder="Subdomain"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="experimentId"
                          name="experimentId"
                          placeholder="experimentId"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="pid"
                          placeholder="Pid"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="staticUrl"
                          placeholder="staticUrl"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="variationId"
                          placeholder="variationId"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="vid"
                          placeholder="Vid"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                        <input
                          type="text"
                          className="form-control"
                          id="variationPath"
                          placeholder="variationPath"
                          onChange={this.formUpdate.bind(
                            this,
                            variation,
                            index
                          )}
                        />
                      </div>

                      {variationForm.deviceCategory.map((data, innerIndex) => {
                        return (
                          <span key={innerIndex}>
                            <input
                              style={{ marginLeft: 10, marginRight: 20 }}
                              type="checkbox"
                              name="type"
                              value={data.type}
                              onChange={this.deviceTypeChange.bind(
                                this,
                                variation,
                                index
                              )}
                            />
                            {data.type}
                          </span>
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={this.addVariation.bind(this)}>
                        Add Variation
                      </button>
                    </div>
                  );
                })}
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    variationForm: state.app.variationForm,
    createRouteForm: state.app.createRouteForm,
    publisherRoutes: state.app.publisherRoutes,
    publishers: state.app.publishers
  };
}

export default connect(mapStateToProps)(CreateRoute);
