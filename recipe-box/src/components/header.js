"use strict";

import React from 'react';
import { Link, IndexLink } from 'react-router';

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Recipe Box</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/recipes">All Recipes</Link></li>
            <li><Link to="/recipe">Add Recipe</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
