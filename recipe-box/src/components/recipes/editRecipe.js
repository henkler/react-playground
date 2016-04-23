import React from 'react';
import RecipeStore from '../../stores/recipeStore';
import RecipeActions from '../../actions/recipeActions';
import RecipeForm from './recipeForm';

import toastr from 'toastr';

var EditRecipePage = React.createClass({
  getInitialState: function() {
    return {
      recipe: RecipeStore.getNewRecipe()
    }
  },
  componentWillMount: function() {
    var recipeID = parseInt(this.props.params.id);
    if (recipeID) {
      this.setState({recipe: RecipeStore.getByID(recipeID)});
    }
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>{this.state.recipe.id ? "Edit Recipe" : "New Recipe"}</h2>
            </div>
            <div className="panel-body">
              <RecipeForm
                recipe={this.state.recipe}
                onChange={this.setRecipeState}
                onSave={this.saveRecipe}/>
            </div>
          </div>
        </div>
      </div>
    );
  },

  setRecipeState: function(event) {
    var field = event.target.name;
    var value = event.target.value;

    this.state.recipe[field] = value;

    this.setState({recipe: this.state.recipe});
  },

  saveRecipe: function(event) {
    event.preventDefault();

    if (this.state.recipe.id) {
      RecipeActions.update(this.state.recipe);
      toastr.success('Recipe successfuly edited');
    }
    else {
      RecipeActions.create(this.state.recipe);
      toastr.success('Recipe successfuly created');
    }

    this.props.history.push('/recipes');
  }
});

module.exports = EditRecipePage;
