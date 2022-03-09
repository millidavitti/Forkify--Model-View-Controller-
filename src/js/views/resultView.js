import ParentView from './parentView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends ParentView {
  constructor() {
    super();
  }
  _parentElement = document.querySelector('.results');

  _generateHtml() {
    return this._data.map(this._htmlResults).toString();
  }

  _htmlResults(recipe) {
    return `
      <li class="preview">
            <a class="preview__link preview__link--active" href="#${recipe.id}">
              <figure class="preview__fig">
                <img src="${recipe.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${recipe.title}</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }
}

export default new ResultsView();
