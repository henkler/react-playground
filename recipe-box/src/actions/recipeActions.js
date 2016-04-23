"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');

var RecipeActions = {
  initialize: function() {
      Dispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE
      })
  },

  reset: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.RESET
    })
  },

  create: function(recipe) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECIPE_CREATE,
      recipe: recipe
    });
  },

  update: function(recipe) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECIPE_UPDATE,
      recipe: recipe
    });
  },

  destroy: function(id) {
    Dispatcher.dispatch({
      actionType: ActionTypes.RECIPE_DESTROY,
      id: id
    });
  }
};

module.exports = RecipeActions;
