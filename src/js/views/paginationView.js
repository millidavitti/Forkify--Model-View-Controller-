import ParentView from './parentView.js';
import icons from 'url:../../img/icons.svg';

class Pagination extends ParentView {
  _parentElement = document.querySelector('.pagination');
  _generateHtml() {
    const currentPage = this._data.page;
    const numOfPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //   When on page 1 with other existing pages
    if (currentPage === 1 && numOfPages > 1) {
      return `
            <button class="btn--inline pagination__btn--next" data-pageNum=${
              currentPage + 1
            }>
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }

    // Other pages
    if (currentPage < numOfPages && numOfPages > 1) {
      return `
            <button class="btn--inline pagination__btn--prev" data-pageNum=${
              currentPage - 1
            }>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>

          <button class="btn--inline pagination__btn--next" data-pageNum=${
            currentPage + 1
          }>
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }
    if (currentPage === numOfPages) {
      // last page
      return `
            <button class="btn--inline pagination__btn--prev" data-pageNum=${
              currentPage - 1
            }>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
          </button>
          
        `;
    }
    // Only page one
    return '';
  }

  paginationHandler(handlerFn) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const pageNum = +btn.dataset.pagenum;
      handlerFn(pageNum);
    });
  }
}

/*
 <div class="pagination">
          <!-- <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button> -->
        </div>
*/

export default new Pagination();
