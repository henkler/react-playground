import React from 'react';
import LeaderboardTable from './leaderboardTable';
import { ALLTIME_LEADERS_CACHED, RECENT_LEADERS_CACHED } from './cachedData';

const Leaderboard = React.createClass({
  getDefaultProps: function() {
    return {
      leaderboardRecentURL: 'http://fcctop100.herokuapp.com/api/fccusers/top/recent',
      leaderboardTopURL: 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime'
    };
  },
  getInitialState: function() {
    return {
      currentAPIURL: this.props.leaderboardTopURL,
      leaders: [],
      useCached: true,
      sortBy: 'rank',
      sortAscending: true
    };
  },
  getTitle: function() {
    var title = "Leaders";
    if (this.state.currentAPIURL === this.props.leaderboardTopURL) {
      title += " (All Time)";
    }
    else {
      title += " (Last 30 Days)";
    }

    if (this.state.useCached) {
      title += " <Cached>";
    }

    return title;
  },
  displayRecent: function() {
    if (this.state.currentAPIURL === this.props.leaderboardRecentURL) {
      return;
    }

    this.setState({currentAPIURL: this.props.leaderboardRecentURL }, function() {
      this.downloadLeaderboard();
    });
  },
  displayTop: function() {
    if (this.state.currentAPIURL === this.props.leaderboardTopURL) {
      return;
    }

    this.setState({currentAPIURL: this.props.leaderboardTopURL }, function() {
      this.downloadLeaderboard();
    });
  },
  downloadLeaderboard: function() {
    if (!this.state.useCached) {
      $.get(this.state.currentAPIURL, function (leaders) {
        // set the rank for each leader
        leaders.forEach(function(leader, index) {
          leader.rank = index + 1;
        });
        this.setState({leaders: this.sortLeaders(leaders)})
      }.bind(this));
    }
    else {
      var leaders;
      if (this.state.currentAPIURL === this.props.leaderboardTopURL) {
        leaders = ALLTIME_LEADERS_CACHED;
      }
      else {
        leaders = RECENT_LEADERS_CACHED;
      }
      leaders.forEach(function(leader, index) {
        leader.rank = index + 1;
      });
      this.setState({leaders: this.sortLeaders(leaders)});
    }
  },
  sortLeaders: function(leaders) {
    function leaderSorter(a, b) {
      var sortBy = this.state.sortBy;
      var sortAscending = this.state.sortAscending;

      if (typeof a[sortBy] === 'string') {
        if(a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) {
          return sortAscending ? -1 : 1;
        }
        else if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) {
          return sortAscending ? 1 : -1;
        }
        else {
          return 0;
        }
      }
      else {
        if (!sortAscending) {
          return b[sortBy] - a[sortBy];
        }
        else {
          return a[sortBy] - b[sortBy];
        }
      }
    }
    return leaders.sort(leaderSorter.bind(this));
  },
  updateSorting: function(sort) {
    if (sort === this.state.sortBy) {
      return;
    }

    this.setState({sortBy: sort}, function() {
      this.setState({leaders: this.sortLeaders(this.state.leaders)});
    });
  },
  toggleSortOrder: function() {
    this.setState({sortAscending: !this.state.sortAscending}, function() {
      this.setState({leaders: this.sortLeaders(this.state.leaders)});
    });
  },
  handleCachedChange: function(event) {
    this.setState({useCached: event.target.checked}, function() {this.downloadLeaderboard();});
  },
  handleRowSort: function(event) {
    var sortBy = $(event.target).data('sort');
    if (sortBy == this.state.sortBy) {
      this.toggleSortOrder();
    }
    else {
      this.updateSorting(sortBy);
    }
  },
  componentDidMount: function() {
    this.downloadLeaderboard();
  },
  render: function() {
    return (
      <div className="leaderboard">
        <div className="panel panel-success">
          <div className="panel-heading">
            <div className="row">
              <div className="col-xs-6">
                <h2>{this.getTitle()}</h2>
              </div>
              <div className="col-xs-6 text-right">
                <div className="btn-group">
                  <button className="btn btn-success btn-lg" onClick={this.displayTop}>All Time</button>
                  <button className="btn btn-info btn-lg" onClick={this.displayRecent}>30 Days</button>
                </div>
                <div className="checkbox">
                  <label><input type="checkbox" checked={this.state.useCached} onChange={this.handleCachedChange} />Use Cached Data (Be nice to API Server)</label>
                </div>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <LeaderboardTable leaders={this.state.leaders} handleRowSort={this.handleRowSort} />
          </div>
        </div>
      </div>
    );
  }
});

export default Leaderboard;