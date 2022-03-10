import 'core-js/stable';
import 'regenerator-runtime/runtime';
// MVC
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import { ERROR_MSG } from './config.js';
// import { SUCCESS_MSG } from './config.js';

if (module.hot) module.hot.accept();

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
    const query = searchView.getQuery();
    if (!query) return;
    resultsView.spinner();

    await model.loadSearch(query);

    resultsView.render(model.paginate());

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
}

searchResults();

function paginationControl(pageNum) {
  resultsView.render(model.paginate(pageNum));

  paginationView.render(model.state.search);
}

function init() {
  recipeView.addHandler(showRecipe);
  searchView.addSearchHandler(searchResults);
  paginationView.paginationHandler(paginationControl);
}

init();
