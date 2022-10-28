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

    fetch(
      `https://aircall-job.herokuapp.com/activities/${this.props.match.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        this.setState(() => ({ callData: data }));
      });
  }

  render() {
    return (
      <div className="detailContainer">
        <h1>Call Data</h1>

        <div>
          <h3>Via - {this.state.callData.via} </h3>
          <h3>From - {this.state.callData.from} </h3>
          <h3>Duration - {this.state.callData.duration} sec </h3>
          <h3>Call type - {this.state.callData.call_type} </h3>
          <h3>Direction - {this.state.callData.direction} </h3>
          {this.state.callData.to && <h3>To {this.state.callData.to} </h3>}
        </div>
      </div>
    );
  }
}

// into App
export default ActivityDetail;
