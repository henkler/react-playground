import React from 'react';

const PageHeader = React.createClass({
  render: function() {
    return (
    <div className="jumbotron">
      <h1>FreeCodeCamp Leaderboard</h1>
      <ul>
        <li>Sortable Columns</li>
        <li>Column click toggles sort order</li>
        <li>Ability to use cached (static) data instead of pulling from live API</li>
        <li>Fast inplace sorting (no API pull) of leaderboard</li>
      </ul>
    </div>
    );
  }
});

export default PageHeader;
