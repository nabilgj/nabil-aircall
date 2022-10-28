import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ActivityFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      timeperiod: '',
    };
  }

  componentDidMount() {
    console.log('componentDidMount', this.props.calls);

    const { call_type, created_at } = this.props.calls;

    const callTime = created_at.split('T')[1];
    console.log('callTime', callTime);
    const callTime2 = callTime.split('.')[0];
    console.log('callTime2', callTime2);

    const callTime3 = callTime.split(':')[0];
    console.log('callTime3', callTime3);

    let timeperiod = '';
    if (callTime3 >= 1 && callTime3 <= 12) {
      timeperiod = 'am';
    } else {
      timeperiod = 'pm';
    }

    this.setState(() => ({ time: callTime2, timeperiod: timeperiod }));

    // const callTime3 = callTime2.split(':');
    // console.log('callTime3', callTime3);

    // const callTime4 = callTime3[0] + callTime3[1];
    // console.log('callTime4', callTime4);
  }

  render() {
    return (
      <div className="callContainer">
        <div>
          <Link to={`/inbox/${this.props.calls.id}`}>
            <p>{this.props.calls.call_type}</p>
          </Link>
        </div>

        <div
          style={{
            textAlign: 'center',
            width: '50%',
          }}
        >
          <Link to={`/inbox/${this.props.calls.id}`}>
            <p>{this.props.calls.to}</p>
            <p>tried to call on {this.props.calls.from}</p>
          </Link>
        </div>

        <div style={{ display: 'flex', width: 'auto' }}>
          <Link to={`/inbox/${this.props.calls.id}`}>
            {this.state.time} - {this.state.timeperiod}
          </Link>
        </div>
      </div>
    );
  }
}

// ActivityFeeds
export default ActivityFeed;
