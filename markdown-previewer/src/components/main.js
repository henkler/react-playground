import React from 'react';
import PageHeader from './pageHeader';
import Previewer from './previewer';

const Main = React.createClass({
  render: function() {
    return (
      <div className="container">
        <PageHeader />
        <Previewer />
      </div>
    );
  }
});

export default Main;
