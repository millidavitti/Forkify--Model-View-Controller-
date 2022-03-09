class SearchView {
  #parentElement = document.querySelector('.search');
  getQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addSearchHandler(handlerFn) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handlerFn();
    });
  }
}

export default new SearchView();
