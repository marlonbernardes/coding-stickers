import React, { Component } from 'react';
import StickerList from '../StickerList';
import DraggableStickerContainer from '../../containers/DraggableStickerContainer';
import './CustomizationWidget.scss';

const defaultProps = {
};

class CustomizationWidget extends Component {

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
            <img id="custom" src="http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbookpro/select/macbookpro-select-inthebox?wid=1122&hei=804&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453535639039" />
            <DraggableStickerContainer />
          </div>
        </div>
        <div className="content stickers">
          <div className="stickers-header">
            <a href="#" className="link-secondary" onClick={onClearCustomization}>
              CLEAR CUSTOMIZATION
            </a>

            <input placeholder="Find stickers" onChange={onChangeFilter}/>
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
