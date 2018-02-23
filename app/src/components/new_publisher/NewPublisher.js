import React, { Component } from 'react';
import Nav from '../navbar/Nav';
import '../publishers/Pub.css';

// eslint-disable-next-line
let testUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[````\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export default class NewPublisher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [{ id: 'domain-0', domain: '', escape: '' }],
      count: 1
    };
    this.addDomains = this.addDomains.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidUpdate(props, states) {
    // console.log('props ------',props)
  }
  handleDomainChange(targetId, event) {
    const input = this.state.inputs.map(data => {
      if (data.domain.length > 4) {
        if (testUrl.test(data.domain)) {
          event.target.parentNode.setAttribute(
            'class',
            'form-group col-sm-6 has-success'
          );
        } else {
          event.target.parentNode.setAttribute(
            'class',
            'form-group col-sm-6 has-error'
          );
        }
      } else {
      }

      if (data.id === targetId) {
        data.domain = event.target.value;
      }
      return data;
    });
    this.setState({ inputs: input, count: this.state.count });
  }

  handleEscapeChange(targetId, event) {
    const input = this.state.inputs.map(data => {
      if (data.escape.length > 4) {
        if (testUrl.test(data.escape)) {
          event.target.parentNode.setAttribute(
            'class',
            'form-group col-sm-6 has-feedback has-success'
          );
        } else {
          event.target.parentNode.setAttribute(
            'class',
            'form-group col-sm-6 has-feedback has-error'
          );
        }
      } else {
      }
      if (data.id === targetId) {
        data.escape = event.target.value;
      }
      return data;
    });
    this.setState({ inputs: input, count: this.state.count });
  }

  handleDeleteDomain(deleteId) {
    const newArr = this.state.inputs.filter(dat => dat.id !== deleteId);
    // console.log(newArr)
    // console.log('deleted id -----',deleteId)
    this.setState({ inputs: newArr, count: this.state.count });
  }

  handleSubmit(e) {
    e.preventDefault();
    let domains = [];
    let escapeArr = [];

    escapeArr = this.state.inputs.map((data, index) => {
      let tempObj = {};
      if (data.domain !== '' && data.escape !== '') {
        tempObj.domain = data.domain;
        tempObj.escape = data.escape;
        domains.push(data.domain);
      }
      return tempObj;
    });

    let formData = {
      publisherName: this.refs.pubName.value,
      publisherDescription: this.refs.description.value,
      escapes: escapeArr,
      acceptedDomains: domains
    };

    let params = {
      method: 'POST',
      body: JSON.stringify(formData)
    };

    fetch('https://routedb.zeeto.io/publisher', params)
      .then(res => {
        return res.json();
      })
      .then(res => {
        if (res.response === 'success') {
          window.location = `/route/${res.data}`;
          // <Redirect to='/route/'{res.data} />
        }
        // this.setState({publisher:res})
        console.log(res);
      });
  }

  addDomains(e) {
    const counter = this.state.count + 1;
    var newInput = { id: `domain-${counter - 1}`, domain: '', escape: '' };
    this.setState({
      inputs: this.state.inputs.concat([newInput]),
      count: counter
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="jumbotron">
            <h1>New Publisher</h1>
          </div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group col-sm-12">
              <label htmlFor="pubName">Publisher Name</label>
              <input
                type="text"
                className="form-control"
                id="pubName"
                ref="pubName"
                required
              />
            </div>

            <div className="form-group col-sm-12">
              <label htmlFor="description">Publisher Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                ref="description"
              />
            </div>
            <div id="domains">
              {this.state.inputs.map((input, index) => {
                const inputAcc = `${input.id}-acc`;
                const inputEsc = `${input.id}-esc`;
                return (
                  <div id={input.id} key={index}>
                    <div className="form-group col-sm-6">
                      <label className="control-label" htmlFor="acceptedDomain">
                        Accepted Url
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={inputAcc}
                        value={input.domain}
                        ref={inputAcc}
                        onChange={this.handleDomainChange.bind(this, input.id)}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-6 has-feedback">
                      <label className="control-label" htmlFor="escapeUrl">
                        Escape
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={inputEsc}
                        value={input.escape}
                        ref={inputEsc}
                        onChange={this.handleEscapeChange.bind(this, input.id)}
                        required
                      />
                      <span
                        className="glyphicon glyphicon-remove form-control-feedback deleteRow"
                        todelete={input.id}
                        style={{ right: 15 }}
                        onClick={this.handleDeleteDomain.bind(this, input.id)}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="form-group col-sm-12">
              <button
                type="button"
                onClick={() => this.addDomains()}
                className="btn btn-default btn-xs btn-span ">
                {' '}
                <span
                  className="glyphicon glyphicon-plus"
                  aria-hidden="true"
                />{' '}
                domain
              </button>
            </div>
            <button type="submit" className="btn btn-default col-sm-12">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
