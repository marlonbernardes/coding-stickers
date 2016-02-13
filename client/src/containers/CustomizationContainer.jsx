import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List as ImmutableList, Map } from 'immutable';
import CustomizationWidget from '../components/CustomizationWidget';

export class CustomizationContainer extends Component {
  render() {
    return (
      <CustomizationWidget
        onClickSticker={this.props.addCustomization}
        onClearCustomization={this.props.clearCustomization}
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
