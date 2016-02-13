import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as ImmutableList, Map } from 'immutable';
import CustomizationWidget from '../components/CustomizationWidget';

export class CustomizationContainer extends Component {
  render() {
    return (
      <CustomizationWidget
        onClickSticker={this.props.addSticker}
        onClearCustomization={this.props.clearCustomization}
        stickers={this.props.stickers}
        selectedStickers={this.props.selectedStickers}
      />
    );
  }
}

function getSelectedStickers(state) {
  return state.customization;
}

function getAllStickers() {
  const result = Array.apply(null, { length: 100 })
    .map((el, i) => (new Map({
      image: 'https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/295/medium/1393320349/html5-stickers.jpg',
      id: i,
    })));
  return ImmutableList.of(...result);
}

function mapStateToProps(state) {
  return {
    selectedStickers: getSelectedStickers(state),
    stickers: getAllStickers(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addSticker: (sticker) => {
      dispatch({ type: 'ADD_STICKER', sticker });
    },
    clearCustomization: () => {
      dispatch({ type: 'CLEAR_CUSTOMIZATION' });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizationContainer);
