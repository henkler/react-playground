import React from 'react';

const LeaderRow = React.createClass({
  propTypes: {
    leader: React.PropTypes.object.isRequired
  },
  render: function() {
    var userPage = "http://www.freecodecamp.com/" + this.props.leader.username;
    var avatar = <a href={userPage} target="_blank"><img src={this.props.leader.img} />{this.props.leader.username}</a>;
    return (
      <tr>
        <td>{this.props.leader.rank}</td>
        <td>{avatar}</td>
        <td>{this.props.leader.recent}</td>
        <td>{this.props.leader.alltime}</td>
      </tr>
    );
  }
});

export default LeaderRow;
