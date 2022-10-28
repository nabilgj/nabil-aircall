import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class ActivityDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      callData: [],
      archived: false,
    };
  }

  componentDidMount() {
    // console.log('componentDidMount');

    const id = this.props.match.params.id;
    let archived = this.props.location.search;
    let isArchived = archived.split('=')[1];

    const callId = JSON.parse(window.localStorage.getItem('callId'));

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState(() => ({ callData: data, archived: isArchived }));
      });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this.state.archived);

    const archivedB = this.state.archived;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(archivedB),
    };

    const id = this.props.match.params.id;

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log('requestOptions componentDidUpdate', data);
        // this.setState(() => ({ archiveData: data }));
      });
  }

  archivedHandler() {
    // console.log('archivedHandler', this.props);
    this.props.history.replace('/archive');
  }

  render() {
    // console.log('render');
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
              <button disabled={true} onClick={this.archivedHandler}>
                Archived Not Availble
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

// into App
export default ActivityDetail;
