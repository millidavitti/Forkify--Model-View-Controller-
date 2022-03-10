import ParentView from './parentView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends ParentView {
  _parentElement = document.querySelector('.results');
  _errorMsg =
    'Seems we are outdated! We do not have results for your search query. Try again!';
  constructor() {
    super();
  }

  _generateHtml() {
    return this._data.map(this._htmlResults).toString();
  }

  // 'Seems we are outdated! We do not have results for your search query. Try again!'

  _htmlResults(recipe) {
    return `
      <li class="preview">
            <a class="preview__link " href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image}" alt="${recipe.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">The Pioneer Woman</p>               
              </div>
            </a>
          </li>
    `;
  }

  /*
    <div class="preview__user-generated">
      <svg>
        <use href="${icons}#icon-user"></use>
      </svg>
    </div>
  */
}

export default new ResultsView();
