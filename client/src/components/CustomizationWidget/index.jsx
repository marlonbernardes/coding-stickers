import React, { Component } from 'react';
import StickerListContainer from '../../containers/StickerListContainer';
import ProductContainer from '../../containers/ProductContainer';
import Pagination from '../Pagination';
import './CustomizationWidget.scss';

const defaultProps = {
};

class CustomizationWidget extends Component {

  render() {
    const { onChangeFilter } = this.props;

    return (
      <div className="container container-product">
        <ProductContainer />
        <div className="content stickers">
          <div className="stickers-search">
            <input placeholder="Search stickers" onChange={onChangeFilter}/>
          </div>
          <StickerListContainer />
          <Pagination
            totalPages={this.props.totalPages}
            onChangePage={this.props.onChangePage}
            currentPage={this.props.currentPage}
          />

        </div>
    </div>
    );
  }
}

CustomizationWidget.defaultProps = defaultProps;
export default CustomizationWidget;
