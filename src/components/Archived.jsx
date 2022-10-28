import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Archived extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calls: [],
    };
  }

  componentDidMount() {
    fetch('https://aircall-job.herokuapp.com/activities')
      .then((response) => response.json())
      .then((data) => {
        const archivedData = data.find((aData) => aData.is_archived);
        // console.log('archived componentDidMount', archivedData);

        this.setState(() => ({ calls: archivedData }));
      });
  }

  render() {
    return (
      <div className="archivedContainer">
        {this.state.calls.length < 1 ? (
          <h1>No Archive</h1>
        ) : (
          <div className="archivedCont">
            {this.state.calls && (
              <h3>
                Via &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.via}
                </span>
              </h3>
            )}

            {this.state.calls && (
              <h3>
                From &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.from}
                </span>
              </h3>
            )}

            {this.state.calls && (
              <h3>
                Duration &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.duration} sec
                </span>
              </h3>
            )}

            {this.state.calls && (
              <h3>
                Call Type &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.call_type}
                </span>
              </h3>
            )}

            {this.state.calls && (
              <h3>
                Direction &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.direction}
                </span>
              </h3>
            )}

            {this.state.calls && (
              <h3>
                To &nbsp;&nbsp;
                <span style={{ fontWeight: 'bold' }}>
                  {this.state.calls.to}
                </span>
              </h3>
            )}

            <div className="backButton">
              <NavLink to="/inbox">
                <button>Back</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// into App
export default Archived;
