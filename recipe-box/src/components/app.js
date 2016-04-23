"use strict";

import React from 'react';
import Header from './header';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
