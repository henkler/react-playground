import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/app';
import HomePage from './components/home';
import RecipePage from './components/recipes/recipes';
import EditRecipePage from './components/recipes/editRecipe';

const Routes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="/recipes" component={RecipePage} />
          <Route path="/recipe" component={EditRecipePage} />
          <Route path="/recipe/:id" component={EditRecipePage} />
        </Route>
      </Router>
    );
  }
});

export default Routes;
