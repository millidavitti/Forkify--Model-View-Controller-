import 'core-js/stable';
import 'regenerator-runtime/runtime';
// MVC
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import { ERROR_MSG } from './config.js';
// import { SUCCESS_MSG } from './config.js';

if (module.hot) module.hot.accept();

// https://forkify-api.herokuapp.com/v2

async function showRecipe() {
  try {
    const id = window.location.hash.replace('#', '');
    if (!id) return;

    //Loading Recipe
    recipeView.spinner();

    await model.loadRecipe(id);

    // Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError(ERROR_MSG);
  }
}

async function searchResults() {
  try {
    resultsView.spinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearch(query);

    resultsView.render(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
}

searchResults();

function init() {
  recipeView.addHandler(showRecipe);
  searchView.addSearchHandler(searchResults);
}

init();
