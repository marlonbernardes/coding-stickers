import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraggableSticker from '../components/DraggableSticker';

export class DraggableStickerContainer extends Component {

  render() {
    const stickers = this.props.selectedStickers.map((sticker, index) => (
      <DraggableSticker
        key={ index }
        index={ index }
        visible={ sticker.get('visible', true)}
        image={ sticker.get('image') }
        x={ sticker.get('x', 0) }
        y={ sticker.get('y', 0) }
        onClickRemove={ this.props.onClickRemove }
        onClickSticker={ this.props.onClickSticker }
        widthInInches={ sticker.get('widthInInches') }
        heightInInches={ sticker.get('heightInInches') }
        onMoveEnd={ this.props.onMoveEnd }
        selected={ sticker.get('selected') }
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMoveEnd: (index, x, y) => {
      dispatch({ type: 'UPDATE_POSITION', index, x, y });
    },
    onClickRemove: (index) => {
      dispatch({ type: 'REMOVE_CUSTOMIZATION', index });
    },
    onClickSticker: (index) => {
      dispatch({ type: 'CLEAR_SELECTION', index });
      dispatch({ type: 'SELECT_STICKER', index });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DraggableStickerContainer);
