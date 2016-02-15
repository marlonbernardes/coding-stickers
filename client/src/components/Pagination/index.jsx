import React, { Component, PropTypes } from 'react';
import { Range } from 'immutable';
import styles from './Pagination.module.scss';

export const NUMBER_OF_PAGES = 9;

function getStartingPageNumber(current, numberOfPages) {
  const pagesBeforeCurrent = Math.floor(numberOfPages / 2);
  return Math.max(1, current - pagesBeforeCurrent);
}

function getEndingPageNumber(current, total, numberOfPages) {
  const pagesAfterCurrent = Math.ceil(numberOfPages / 2);
  const end = Math.min(total + 1, current + pagesAfterCurrent);
  // ensure the end is lesser than the total pages
  const inBoundsEnd = Math.max(end, Math.min(numberOfPages + 1, total));
  return inBoundsEnd;
}

export function pageRange(currentPage, totalPages, numberOfPages = NUMBER_OF_PAGES) {
  return new Range(
    getStartingPageNumber(currentPage, numberOfPages),
    getEndingPageNumber(currentPage, totalPages, numberOfPages)
  );
}

export default class Pagination extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage(event) {
    event.preventDefault();
    const nextPageDisabled = this.props.currentPage >= this.props.totalPages;
    if (!nextPageDisabled) {
      this.props.onChangePage(this.props.currentPage + 1);
    }
  }

  previousPage(event) {
    event.preventDefault();
    const previousPageDisabled = this.props.currentPage <= 1;
    if (!previousPageDisabled) {
      this.props.onChangePage(this.props.currentPage - 1);
    }
  }

  handleClick(event) {
    event.preventDefault();
    const nextPage = parseInt(event.target.getAttribute('data-page-number'), 10);
    this.props.onChangePage(nextPage);
  }

  renderPaginationButton(page) {
    const className = (page === this.props.currentPage ? styles.activeButton : styles.button);
    return (
      <li key={page} className={styles.item}>
        <a
          className={`${className} page-button`}
          data-page-number={page}
          onClick={this.handleClick}
          href="#"
        >
          {page}
        </a>
      </li>
    );
  }

  render() {
    const { currentPage, totalPages } = this.props;
    const range = pageRange(currentPage, totalPages);
    const paginationButtons = range.map(this.renderPaginationButton.bind(this));

    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={`${styles.item} prev-button`}>
            <a href="#" className={styles.button} onClick={this.previousPage}>&lt;</a>
          </li>
          {paginationButtons}
          <li className={`${styles.item} next-button`}>
            <a href="#" className={styles.button} onClick={this.nextPage}>&gt;</a>
          </li>
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
};
