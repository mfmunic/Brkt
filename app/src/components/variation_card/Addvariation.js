import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addNewVariation,
  variationChange,
  postPublisherRoutes
} from '../../modules/actions';

class Addvariation extends Component {
  cancelForm(dataId, event) {
    event.preventDefault();
    this.props.dispatch(addNewVariation({ id: dataId, showForm: false }));
  }

  submitVariation(event) {
    event.preventDefault();
    const urlArr = window.location.href.split('/');
    const pubId = urlArr[urlArr.length - 1];

    const route = this.props.publisherRoutes.filter(data => {
      return data._id === this.props.routeid;
    });
    const returnObj = route[0].obj;
    const sentObj = {};

    sentObj.routeDescription = returnObj.description;
    sentObj.active = true;
    sentObj.escapes = returnObj.escapes;
    sentObj.acceptedDomains = returnObj.acceptedDomains;
    sentObj.publisherName = returnObj.publisher;
    sentObj.publisherDescription = this.props.publishers.filter(
      data => data._id === pubId
    )[0].obj.description;
    sentObj.zrid = route[0]._id;
    sentObj.publisherId = pubId;

    sentObj.deviceCategory = returnObj.deviceCategory.map(device => {
      let retData;
      this.props.variationForm.deviceCategory.forEach(data => {
        if (device.type === data.type && data.checked === true) {
          let s = JSON.parse(JSON.stringify(this.props.variationForm));

          delete s.deviceCategory;
          delete s.dataId;
          device.variation.push(s);
          retData = device;
        } else {
          retData = device;
        }
      });
      return retData;
    });
    this.props.dispatch(postPublisherRoutes(sentObj));
  }

  formUpdate(event) {
    event.preventDefault();
    if (event.target.name === 'type') {
      if (!event.target.checked) {
        this.props.variationForm['deviceCategory'].push(event.target.value);
      }
    } else {
      this.props.variationForm[event.target.id] = event.target.value;
    }
    this.props.dispatch(variationChange(this.props.variationForm));
  }
  deviceTypeChange(event) {
    this.props.variationForm.deviceCategory = this.props.variationForm.deviceCategory.map(
      data => {
        if (data.type === event.target.value) {
          data.checked = event.target.checked;
        }
        return data;
      }
    );
    this.props.dispatch(variationChange(this.props.variationForm));
  }

  render() {
    console.log(this.props);
    const { variationForm } = this.props;
    return (
      <div>
        <h5 className="card-title">Add Variation</h5>
        <form onSubmit={this.submitVariation.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="destinationSubdomain"
              name="destinationSubdomain"
              placeholder="Subdomain"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="experimentId"
              placeholder="experimentId"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="pid"
              placeholder="Pid"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="staticUrl"
              placeholder="staticUrl"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="variationId"
              placeholder="variationId"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="vid"
              placeholder="Vid"
              onChange={this.formUpdate.bind(this)}
            />
            <input
              type="text"
              className="form-control"
              id="variationPath"
              placeholder="variationPath"
              onChange={this.formUpdate.bind(this)}
            />
            {variationForm.deviceCategory.map((data, index) => {
              if (data.checked === true) {
                return (
                  <span disabled key={index}>
                    {data.type.substring(0, 1).toUpperCase()}
                    <input
                      disabled
                      type="checkbox"
                      name="type"
                      value={data.type}
                      defaultChecked="checked"
                    />
                  </span>
                );
              } else {
                return (
                  <span key={index}>
                    {data.type.substring(0, 1).toUpperCase()}
                    <input
                      type="checkbox"
                      name="type"
                      value={data.type}
                      onChange={this.deviceTypeChange.bind(this)}
                    />
                  </span>
                );
              }
            })}
          </div>
          <div
            className="btn-group formGroup"
            role="group"
            aria-label="Basic example">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.cancelForm.bind(this, this.props.data)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    variationForm: state.app.variationForm,
    publisherRoutes: state.app.publisherRoutes,
    publishers: state.app.publishers
  };
}

export default connect(mapStateToProps)(Addvariation);
