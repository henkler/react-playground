import React from 'react';

const LeaderboardHeaderRow = React.createClass({
  propTypes: {
    handleRowSort: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <thead>
        <tr>
          <th className="row-rank" data-sort="rank" onClick={this.props.handleRowSort}>Rank</th>
          <th className="row-name" data-sort="username" onClick={this.props.handleRowSort}>Name</th>
          <th className="row-recentPoints" data-sort="recent" onClick={this.props.handleRowSort}>30 days</th>
          <th className="row-alltimePoints" data-sort="alltime" onClick={this.props.handleRowSort}>All time</th>
        </tr>
      </thead>
    );
  }
});

export default LeaderboardHeaderRow;
