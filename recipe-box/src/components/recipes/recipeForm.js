"use strict";

var React = require('react');

var RecipeForm = React.createClass({
  propTypes: {
      recipe: React.PropTypes.object.isRequired,
      onChange: React.PropTypes.func.isRequired,
      onSave: React.PropTypes.func.isRequired,
      errors: React.PropTypes.object
  },

  render: function() {
    return(
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input type="text"
              name="name"
              className="form-control"
              value={this.props.recipe.name}
              onChange={this.props.onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <input type="text"
              name="ingredients"
              className="form-control"
              value={this.props.recipe.ingredients}
              onChange={this.props.onChange} />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input type="text"
              name="image"
              className="form-control"
              value={this.props.recipe.image}
              onChange={this.props.onChange} />
          </div>

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
        </form>
      </div>
    );
  }
});

module.exports = RecipeForm;
