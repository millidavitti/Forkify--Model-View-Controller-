class SearchView {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addSearchHandler(handlerFn) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handlerFn();
    });
  }
}

export default new SearchView();
