"use strict";
import Dispatcher from '../dispatcher/appDispatcher';
import EventEmitter from 'events';
import ActionTypes from '../constants/actionTypes';

var _ = require('lodash');

var CHANGE_EVENT = 'change';
var initialRecipes = require('../api/recipeData');

var _recipes = {};

function _destroy(recipe_id) {
  _.remove(_recipes, (i) => i.id == recipe_id);
  _updateLocalStorage();
}

function _create(recipe) {
  var id = _.maxBy(_recipes, (r) => r.id ).id + 1;
  recipe.id = id;
  _recipes.push(recipe);
  _updateLocalStorage();
}

function _update (recipe) {
  _destroy(recipe.id);
  _create(recipe);
}

function _updateLocalStorage() {
  localStorage.setItem("recipeBox", JSON.stringify(_recipes));
}

function _retrieveInitialData() {
  if(localStorage["recipeBox"]) {
    _recipes = JSON.parse(localStorage["recipeBox"]);
  }
  else {
    _recipes = initialRecipes.recipes;
    _updateLocalStorage();
  }
}

function _reset() {
  _recipes = initialRecipes.recipes;
  _updateLocalStorage();
}

var RecipeStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _.sortBy(_recipes, ['name']);
  },
  getNewRecipe() {
    return { id: '', name: '' , ingredients: '', image:''};
  },
  getByID(id) {
    return _.find(_recipes, {id: id});
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: Dispatcher.register(function(action) {
    switch(action.actionType) {
      case ActionTypes.INITIALIZE:
        _retrieveInitialData();
        RecipeStore.emitChange();
        break;
      case ActionTypes.RESET:
        _reset();
        RecipeStore.emitChange();
        break;
      case ActionTypes.RECIPE_CREATE:
        _create(action.recipe);
        RecipeStore.emitChange();
        break;
      case ActionTypes.RECIPE_UPDATE:
        _update(action.recipe);
        RecipeStore.emitChange();
        break;
      case ActionTypes.RECIPE_DESTROY:
        _destroy(action.id);
        RecipeStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = RecipeStore;
