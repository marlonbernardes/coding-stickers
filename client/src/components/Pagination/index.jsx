import React, { Component } from 'react';
import { Range } from 'immutable';
import styles from './Pagination.module.scss';

export default class Pagination extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    const nextPageDisabled = this.props.currentPage >= this.props.totalPages;
    if (!nextPageDisabled) {
      this.props.onChangePage(this.props.currentPage + 1);
    }
  }

  previousPage() {
    const previousPageDisabled = this.props.currentPage <= 1;
    if (!previousPageDisabled) {
      this.props.onChangePage(this.props.currentPage - 1);
    }
  }

  handleClick(event) {
    event.preventDefault();
    const nextPage = parseInt(event.target.getAttribute('data-page-number'), 10);
    this.props.onChangePage(nextPage)
  }

  renderPaginationButton(page) {
    const className = (page === this.props.currentPage ? styles.activeButton : styles.button);
    return (
      <li key={page} className={styles.item}>
        <a className={className} data-page-number={page} onClick={this.handleClick} href="#">
          {page}
        </a>
      </li>
    );
  }


  render() {
    const start = Math.max(1, this.props.currentPage - 4);
    const end = Math.min(this.props.totalPages + 1, this.props.currentPage + 5);
    const range = new Range(start, Math.max(end, Math.min(10, this.props.totalPages)));
    const paginationButtons = range.map(this.renderPaginationButton.bind(this));

    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#" className={styles.button} onClick={this.previousPage}>&lt;</a>
        </li>
        {paginationButtons}
        <li className={styles.item}>
          <a href="#" className={styles.button} onClick={this.nextPage}>&gt;</a>
        </li>
      </ul>
    );
  }
}
