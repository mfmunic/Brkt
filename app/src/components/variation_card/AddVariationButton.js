import React, { Component } from 'react';
import { connect } from 'react-redux';
import Addvariation from './Addvariation';
import { addNewVariation, variationChange } from '../../modules/actions';

class AddVariationButton extends Component {
  renderForm(dataId, event) {
    const deviceType = dataId.includes('desktop')
      ? 'desktop'
      : dataId.includes('tablet')
        ? 'tablet'
        : dataId.includes('mobile') ? 'mobile' : 'fallback';
    const sendObj = {
      destinationSubdomain: '',
      experimentId: '',
      pid: '',
      staticUrl: '',
      variationId: '',
      vid: '',
      variationPath: '',
      dataId: '',
      deviceCategory: this.props.variationForm.deviceCategory.map(data => {
        if (deviceType !== data.type) {
          data.checked = false;
        } else {
          data.checked = true;
        }
        return data;
      })
    };
    this.props.dispatch(addNewVariation({ id: dataId, showForm: true }));
    this.props.dispatch(variationChange(sendObj));
  }

  render() {
    const { addNewForm } = this.props;
    // console.log('add new form props', addNewForm.showForm);
    return (
      <div className="card">
        <div className="card-body" addvar="false">
          {addNewForm.id !== this.props.data || !addNewForm.showForm ? (
            <button
              className="btn btn-primary btncenter"
              onClick={this.renderForm.bind(this, this.props.data)}>
              Add Variation
            </button>
          ) : (
            <Addvariation
              data={this.props.data}
              showForm={this.props.showForm}
              routeid={this.props.routeid}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addNewForm: state.app.variations,
    variationForm: state.app.variationForm
  };
}

export default connect(mapStateToProps)(AddVariationButton);
