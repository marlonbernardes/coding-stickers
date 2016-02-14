import React, { Component } from 'react';
import StickerListContainer from '../../containers/StickerListContainer';
import ProductContainer from '../../containers/ProductContainer';
import './CustomizationWidget.scss';

const defaultProps = {
};

class CustomizationWidget extends Component {

  constructor() {
    super();
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    this.props.onChangePage(this.props.currentPage + 1);
  }

  previousPage() {
    this.props.onChangePage(this.props.currentPage - 1);
  }

  render() {
    const { onChangeFilter } = this.props;
    const previousPageDisabled = this.props.currentPage <= 1;
    const nextPageDisabled = this.props.currentPage >= this.props.totalPages;

    return (
      <div className="container container-product">
        <ProductContainer />
        <div className="content stickers">
          <div className="stickers-search">
            <i className="fa fa-search"></i>
            <input placeholder="Find stickers" onChange={onChangeFilter}/>
          </div>
          <StickerListContainer />
          <button
            className="pagination-button"
            onClick={this.previousPage}
            disabled={previousPageDisabled}
          >
            Previous
          </button>
          <button
            className="pagination-button"
            onClick={this.nextPage}
            disabled={nextPageDisabled}
          >
            Next
          </button>
        </div>
    </div>
    );
  }
}

CustomizationWidget.defaultProps = defaultProps;
export default CustomizationWidget;
