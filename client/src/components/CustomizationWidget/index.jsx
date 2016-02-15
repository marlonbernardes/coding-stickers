import React, { Component, PropTypes } from 'react';
import StickerListContainer from '../../containers/StickerListContainer';
import ProductContainer from '../../containers/ProductContainer';
import PaginationContainer from '../../containers/PaginationContainer';
import './CustomizationWidget.scss';

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
          <PaginationContainer />
        </div>
    </div>
    );
  }
}

CustomizationWidget.propTypes = {
  onChangeFilter: PropTypes.func,
};

export default CustomizationWidget;
