import React from 'react';

import ActivityFeed from './ActivityFeed.jsx';

class ActivityFeeds extends React.Component {
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
        // console.log('ActivityFeeds', data);
        this.setState(() => ({ calls: data }));
      });
  }

  render() {
    return (
      <div className="callsContainer">
        {this.state.calls
          ? this.state.calls.map((call) => (
              <ActivityFeed key={call.id} calls={call} />
            ))
          : 'loading...'}
      </div>
    );
  }
}
// into App
export default ActivityFeeds;
