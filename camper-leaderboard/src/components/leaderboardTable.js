import React from 'react';
import LeaderboardHeaderRow from './leaderboardheaderRow';
import LeaderRow from './leaderRow';

const LeaderboardTable = React.createClass({
  propTypes: {
    leaders: React.PropTypes.array.isRequired,
    handleRowSort: React.PropTypes.func.isRequired
  },
  render: function() {
    var rows = [];
    this.props.leaders.forEach(function(leader, index) {
      rows.push(<LeaderRow leader={leader} />);
    }.bind(this));
    return (
      <table>
        <LeaderboardHeaderRow handleRowSort={this.props.handleRowSort} />
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

export default LeaderboardTable;
