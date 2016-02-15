import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraggableSticker from '../components/DraggableSticker';

export class DraggableStickerContainer extends Component {

  render() {
    const stickers = this.props.selectedStickers.map((sticker, index) => (
      <DraggableSticker
        key={ index }
        index={ index }
        image={ sticker.get('image') }
        onClickRemove={ this.props.onClickRemove }
        onClickOutside={ this.props.onClickOutside }
        onClickSticker={ this.props.onClickSticker }
        widthInInches={ sticker.get('widthInInches') }
        heightInInches={ sticker.get('heightInInches') }
        productWidthInInches={this.props.product.get('widthInInches')}
        productHeightInInches={this.props.product.get('heightInInches')}
        selected={ sticker.get('selected') }
        visible={ sticker.get('visible', true) }
      />
    ));

    return (
      <div>
        { stickers }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStickers: state.customization,
    product: state.product,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickRemove: (index) => {
      dispatch({ type: 'REMOVE_CUSTOMIZATION', index });
    },
    onClickSticker: (index) => {
      dispatch({ type: 'CLEAR_SELECTION' });
      dispatch({ type: 'SELECT_STICKER', index });
    },
    onClickOutside: () => {
      dispatch({ type: 'CLEAR_SELECTION' });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableStickerContainer);
