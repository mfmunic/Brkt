import React, { Component } from 'react';
import { connect } from 'react-redux';
import Variationcard from '../variation_card/Variation';
import AddVariationButton from '../variation_card/AddVariationButton';

class TempDataRow extends Component {
  componentWillUpdate(nex) {
    // this.props.dispatch(fetchPublisherRoutes(pubId));
    console.log('updated will update tempdatarow', nex);
    console.log(this.props);
  }
  render() {
    // const { publisherRoutes } = this.props;
    // const { publisherRouteOne } = this.props;
    const { publisherobj } = this.props;
    const tagId = `heading${this.props.arialabelledby}`;
    const controlsId = `collapse${this.props.ariacontrols}`;
    const dataTarget = `#${this.props.dataTarget}`;
    // const mapVar =
    // typeof publisherRouteOne === 'object' ? publisherRouteOne : publisherobj;
    // console.log('render props publisher routes ', publisherobj);
    return (
      <div
        className="collapse"
        id={this.props.ariacontrols}
        datatarget={dataTarget}
        aria-controls={controlsId}
        aria-labelledby={tagId}
        data-parent="#accordion">
        <div className="container">
          <div className="row">
            <div
              className="list-group container displayvariations"
              id="list-tab"
              role="tablist">
              {publisherobj.deviceCategory.map((device, count) => {
                let active = 'list-group-item col-sm-3 list-group-item-action';
                if (count === 0) {
                  active =
                    'list-group-item col-sm-3 list-group-item-action active';
                }
                const newid = `${device.type}${this.props.publisherid}`;
                const othernewtype = `#${this.props.publisherid}${device.type}`;
                return (
                  <a
                    className={active}
                    id={newid}
                    key={newid}
                    data-toggle="list"
                    href={othernewtype}
                    role="tab"
                    aria-controls={newid}>
                    {device.type}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="row">
            <div className="tab-content" id="nav-tabContent">
              {publisherobj.deviceCategory.map((device, count) => {
                const newid = `${device.type}${this.props.publisherid}`;
                const othernewid = `${this.props.publisherid}${device.type}`;
                let active =
                  count === 0 ? 'tab-pane fade show active' : 'tab-pane fade';
                const vari = device.variation.map((variation, index) => {
                  return <Variationcard data={variation} key={index} />;
                });
                return (
                  <div
                    className={active}
                    id={othernewid}
                    key={count}
                    role="tabpanel"
                    aria-labelledby={newid}>
                    <div className="card-group">
                      {vari}
                      <AddVariationButton
                        data={newid}
                        routeid={this.props.publisherid}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log('map change', state);
  return {
    publisherRoutes: state.app.publisherRoutes
  };
}

export default connect(mapStateToProps)(TempDataRow);

// export function TempDataRow(props) {
//   return <div>{props}</div>;
// }
