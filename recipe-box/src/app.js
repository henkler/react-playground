import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import RecipeActions from './actions/recipeActions';

require('./styles/main.scss');

window.React = React;
RecipeActions.initialize();

ReactDOM.render(<Routes />, document.getElementById('container'));
