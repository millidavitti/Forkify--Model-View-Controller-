import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';

// Application Data
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: 10,
    page: 1,
  },
};

export async function loadRecipe(id) {
  //Load Recipe
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
}

export async function loadSearch(query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.query = query;
    const { recipes } = data.data;
    console.log(data.data);
    state.search.results = recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (error) {
    throw error;
  }
}

export function paginate(pageNum = 1) {
  state.search.page = pageNum;
  const start = (pageNum - 1) * state.search.resultsPerPage;
  const end = pageNum * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
}
