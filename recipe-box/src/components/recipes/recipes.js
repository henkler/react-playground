import React from 'react';
import RecipeStore from '../../stores/recipeStore';
import RecipeActions from '../../actions/recipeActions';
import RecipeList from './recipeList';

import toastr from 'toastr';

function getRecipeState() {
  return {
    recipes: RecipeStore.getAll()
  }
}

function resetRecipeBox(event) {
  event.preventDefault();
  if (window.confirm("Are you sure?")) {
    RecipeActions.reset();
    toastr.warning('Recipe Box Reset');
  }
}

var RecipePage = React.createClass({
  getInitialState: function() {
    return getRecipeState();
  },

  componentWillMount: function() {
    RecipeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RecipeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <h1>Recipes</h1>
        <RecipeList recipes={this.state.recipes} />
        <button type="button" className="btn btn-danger" onClick={resetRecipeBox}>Reset Recipe Box</button>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getRecipeState());
  }
});

module.exports = RecipePage;
