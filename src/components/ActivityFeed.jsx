import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import MissedCall from '../svg/MissedCall.jsx';
import Answered from '../svg/Answered.jsx';
import VoiceMail from '../svg/VoiceMail.jsx';

class ActivityFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      timeperiod: '',
    };
  }

  componentDidMount() {
    const { call_type, created_at, id } = this.props.calls;

    window.localStorage.setItem('callId', JSON.stringify(id));

    const callTime = created_at.split('T')[1];
    const callTime2 = callTime.split('.')[0];
    const callTime3 = callTime.split(':');
    let callTime4 = callTime3[0] + ':' + callTime3[1];

    const callTime5 = callTime.split(':')[0];
    let timeperiod = '';
    if (callTime5 >= 1 && callTime5 <= 12) {
      timeperiod = 'am';
    } else {
      timeperiod = 'pm';
    }

    this.setState(() => ({ time: callTime4, timeperiod: timeperiod }));
  }

  render() {
    return (
      <div className="callContainer">
        <div>
          <NavLink
            to={`/inbox/${this.props.calls.id}?isArchived=${this.props.calls.is_archived}`}
          >
            {this.props.calls && this.props.calls.call_type === 'missed' && (
              <MissedCall />
            )}

            {this.props.calls && this.props.calls.call_type === 'answered' && (
              <Answered />
            )}

            {this.props.calls && this.props.calls.call_type === 'voicemail' && (
              <VoiceMail />
            )}
          </NavLink>
        </div>

        <div
          style={{
            textAlign: 'left',
            width: '70%',
            marginLeft: '12px',
          }}
        >
          <NavLink
            to={`/inbox/${this.props.calls.id}?isArchived=${this.props.calls.is_archived}`}
          >
            <p>{this.props.calls.to ? this.props.calls.to : 'Unknown'}</p>
            <p>tried to call on</p>
            <p>{this.props.calls.from}</p>
          </NavLink>
        </div>

        <div style={{ display: 'flex', width: 'auto' }}>
          <NavLink
            to={`/inbox/${this.props.calls.id}?isArchived=${this.props.calls.is_archived}`}
          >
            {this.state.time} {this.state.timeperiod}
          </NavLink>
        </div>
      </div>
    );
  }
}

// ActivityFeeds
export default ActivityFeed;
