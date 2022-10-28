import React, { Component } from 'react';

class ActivityFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.calls);

    const { call_type, created_at } = this.props.calls;

    const callTime = created_at.split('T')[1];
    console.log('callTime', callTime);
    const callTime2 = callTime.split('.')[0];
    console.log('callTime2', callTime2);

    this.setState(() => ({ time: callTime2 }));

    // const callTime3 = callTime2.split(':');
    // console.log('callTime3', callTime3);

    // const callTime4 = callTime3[0] + callTime3[1];
    // console.log('callTime4', callTime4);
  }

  // componentDidUpdate() {
  //   console.log('ActivityFeed', this.props.calls);
  // }

  render() {
    return (
      <div className="callContainer">
        <div>
          <p>{this.props.calls.call_type}</p>
        </div>

        <div>
          <p>{this.props.calls.to}</p>
          <p>tried to call on {this.props.calls.from} </p>
        </div>

        <div>
          <p> {this.state.time}</p>
        </div>
      </div>
    );
  }
}

// ActivityFeeds
export default ActivityFeed;
