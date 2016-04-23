"use strict";

var React = require('react');
import { Link } from 'react-router';
import toastr from 'toastr';

var RecipeActions = require('../../actions/recipeActions');

function createRecipeRow(recipe) {
  return (
    <tr key={recipe.id}>
      <td><img src={recipe.image} className="img-responsive recipe-image" /></td>
      <td>{createRecipeIngredientExpander(recipe)}</td>
      <td>
        <Link to={'/recipe/' + recipe.id} className="btn btn-success btn-lg">Edit</Link>
        <button type="button" className="btn btn-warning btn-lg" onClick={deleteRecipe.bind(this, recipe.id)}>Delete</button>
      </td>
    </tr>
  );
}

function createRecipeIngredientExpander(recipe) {
  function ingredientLine(ingredient) {
    return (
      <li className="list-group-item">{ingredient}</li>
    );
  }
  var ingredientList = recipe.ingredients.split(',');
  return (
    <div id={'recipeAccordion' + recipe.id} className="panel-group" role="tablist">
      <div className="panel panel-default">
        <div className="panel-heading" role="tab">
          <h2 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent={'#recipeAccordion' + recipe.id} href={'#recipe' + recipe.id}>
              {recipe.name}
            </a>
          </h2>
        </div>
        <div id={'recipe' + recipe.id} className="panel-collapse collapse">
          <ul className="list-group">
            {ingredientList.map(ingredientLine)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function deleteRecipe(id, event) {
  event.preventDefault();
  if (window.confirm("Are you sure?")) {
    RecipeActions.destroy(id);
    toastr.warning('Recipe deleted');
  }
}

var RecipeList = React.createClass({
  propTypes: {
      recipes: React.PropTypes.array.isRequired
  },

  render: function() {
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th width="20%"></th>
                <th>Name</th>
                <th width="20%"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.recipes.map(createRecipeRow, this)}
            </tbody>
          </table>
        </div>
      );
  }
});

module.exports = RecipeList;
