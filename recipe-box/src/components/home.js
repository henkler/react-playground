"use strict";

import React from 'react';
import { Link } from 'react-router';

var HomePage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Recipe Box</h1>
        <h2>Now with advanced features!</h2>
        <ul>
          <li>React JS Single Page App</li>
          <li>LocalStorage support for persistence</li>
          <li>React-Router for in-browser routing</li>
          <li>Flux for component lifecycle updates</li>
          <li>Browserify used to compile into single JS and CSS file</li>
          <li>Gulp automated build system</li>
        </ul>
        <Link to='/recipe' className="btn btn-success">Try adding a new recipe</Link>
      </div>
    );
  }
});

module.exports = HomePage;
