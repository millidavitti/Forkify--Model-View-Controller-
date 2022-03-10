import icons from 'url:../../img/icons.svg';

export default class ParentView {
  _data;

  #clear() {
    this._parentElement.innerHTML = '';
  }

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const html = this._generateHtml();
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  spinner() {
    const html = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderError(message = this._errorMsg) {
    const html = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderSuccessMessage(message = 'Success!') {
    const html = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this.#clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
