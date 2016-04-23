import React from 'react';
import PageHeader from './pageHeader';
import Leaderboard from './leaderboard';

const Main = React.createClass({
  render: function() {
    return (
      <div>
        <PageHeader />
        <Leaderboard />
      </div>
    );
  }
});

export default Main;