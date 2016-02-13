import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as ImmutableList, Map } from 'immutable';
import CustomizationWidget from '../components/CustomizationWidget';
import StickersApi from '../api/stickers';

export class CustomizationContainer extends Component {
  render() {
    return (
      <CustomizationWidget
        onClickSticker={this.props.addCustomization}
        onClearCustomization={this.props.clearCustomization}
        findStickers={this.props.findStickers}
        stickers={this.props.stickers}
        selectedStickers={this.props.selectedStickers}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedStickers: state.customization,
    stickers: state.stickers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    findStickers: () => {
      StickersApi.findStickers().then(response => {
        const stickers = response.data.slice(0,10).map((sticker, i) => (
          new Map({ id: i, image: sticker.image })
        ));
        dispatch({ type: 'RECEIVE_STICKERS', stickers });
      });
    },
    addCustomization: (sticker) => {
      dispatch({ type: 'ADD_CUSTOMIZATION', sticker });
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
