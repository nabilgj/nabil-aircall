import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ActivityDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      callData: [],
    };
  }

  componentDidMount() {
    console.log('ActivityDetail', this.props.match.params.id);
    console.log('ActivityDetail componentDidMount', this.state.callData);

    const id = this.props.match.params.id;

    const callId = JSON.parse(window.localStorage.getItem('callId'));

    console.log('callId', callId);

    fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState(() => ({ callData: data }));
      });
  }

  render() {
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
            <Link to="/inbox">
              <button>Back</button>
            </Link>
            <Link to="archived">
              <button>Archived</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// into App
export default ActivityDetail;
