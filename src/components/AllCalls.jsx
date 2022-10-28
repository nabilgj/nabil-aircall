import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import MissedCall from '../svg/MissedCall.jsx';
import Answered from '../svg/Answered.jsx';
import VoiceMail from '../svg/VoiceMail.jsx';

class AllCalls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      callData: null,
    };
  }

  componentDidMount() {
    console.log('ActivityDetail', this.props.match.params.id);

    fetch(`https://aircall-job.herokuapp.com/activities`)
      .then((response) => response.json())
      .then((data) => {
        // let uniqueCalls = data.filter((val, ind, arr) =>
        //   console.log(arr.indexOf(val).via === arr.via)
        // );

        // console.log('AllCalls uniqueCalls', uniqueCalls);

        this.setState(() => ({ callData: data }));
      });
  }

  render() {
    return (
      <div className="allCall">
        <Link to="/inbox">
          {this.state.callData
            ? this.state.callData.map((call) => (
                <div className="allcallContainer" key={call.id}>
                  {call.call_type && call.call_type === 'missed' && (
                    <MissedCall />
                  )}

                  {call.call_type && call.call_type === 'answered' && (
                    <Answered />
                  )}

                  {call.call_type && call.call_type === 'voicemail' && (
                    <VoiceMail />
                  )}

                  <h3>{call.via} </h3>
                </div>
              ))
            : 'loading...'}
        </Link>
      </div>
    );
  }
}

// into App
export default AllCalls;
