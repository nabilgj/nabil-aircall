import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class ActivityDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      callData: [],
      archiveData: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log('ActivityDetail', this.props);

    const id = this.props.match.params.id;

    const callId = JSON.parse(window.localStorage.getItem('callId'));

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState(() => ({ callData: data }));
      });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_archived: true }),
    };

    const id = this.props.match.params.id;

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('requestOptions componentDidUpdate', data);

        // this.setState(() => ({ archiveData: data }));
      });
  }

  archivedHandler() {
    console.log('archivedHandler', this.props);
    this.props.history.replace('/archive');
  }

  render() {
    console.log('render');
    return (
      <div className="detailContainer">
        <div className="detailCont">
          {this.state.callData && (
            <h3>
              Via &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.via}
              </span>
            </h3>
          )}

          {this.state.callData && (
            <h3>
              From &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.from}
              </span>
            </h3>
          )}

          {this.state.callData && (
            <h3>
              Duration &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.duration} sec
              </span>
            </h3>
          )}

          {this.state.callData && (
            <h3>
              Call Type &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.call_type}
              </span>
            </h3>
          )}

          {this.state.callData && (
            <h3>
              Direction &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.direction}
              </span>
            </h3>
          )}

          {this.state.callData && (
            <h3>
              To &nbsp;&nbsp;
              <span style={{ fontWeight: 'bold' }}>
                {this.state.callData.to}
              </span>
            </h3>
          )}

          <div className="buttonContainers">
            <NavLink to="/inbox">
              <button>Back</button>
            </NavLink>
            <NavLink to="/archived">
              <button onClick={this.archivedHandler}>Archived</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

// into App
export default ActivityDetail;
