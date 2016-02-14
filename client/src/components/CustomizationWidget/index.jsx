import React, { Component } from 'react';
import StickerList from '../StickerList';
import ProductContainer from '../../containers/ProductContainer';
import DraggableStickerContainer from '../../containers/DraggableStickerContainer';
import './CustomizationWidget.scss';

const defaultProps = {
};

class CustomizationWidget extends Component {

  constructor() {
    super();
    this.handleProductDimensionsChange = this.handleProductDimensionsChange.bind(this);
  }

  handleProductDimensionsChange(event) {
    const selectedOption = event.target.selectedOptions[0];
    const width = parseFloat(selectedOption.getAttribute('data-width'));
    const height = parseFloat(selectedOption.getAttribute('data-height'));
    this.props.changeProductDimensions(width, height);
  }

  render() {
    const {
      onClearCustomization,
      onClickSticker,
      stickers,
      onChangeFilter,
    } = this.props;

    return (
      <div className="container container-product">
        <div className="product-view">
          <div className="product-img dropzone">
            <ProductContainer />
            <DraggableStickerContainer />
          </div>
        </div>
        <div className="content stickers">
          <div className="stickers-header">
            <a href="#" className="link-secondary" onClick={onClearCustomization}>
              CLEAR CUSTOMIZATION
            </a>

            <input placeholder="Find stickers" onChange={onChangeFilter}/>
            <select onChange={this.handleProductDimensionsChange}>
              <option data-width="14.13" data-height="9.73">{`MacBook Pro 17"`}</option>
              <option data-width="5" data-height="3">{`MacBook Pro 19"`}</option>
              <option data-width="10" data-height="8">{`MacBook Pro 15"`}</option>
            </select>
          </div>
          <StickerList
            onClickSticker={onClickSticker}
            onClearCustomization={onClearCustomization}
            stickers={stickers}
          />
      </div>
    </div>
    );
  }
}

CustomizationWidget.defaultProps = defaultProps;
export default CustomizationWidget;
