import React, { Component } from 'react';
import { connect } from 'react-redux';
import StickerList from '../components/StickerList';

function currentPageStickers(state) {
  const { stickers, pagination } = state;
  const page = pagination.get('current') - 1;
  const perPage = pagination.get('perPage');
  return stickers.slice(page * perPage, (page * perPage) + perPage);
}

export class StickerListContainer extends Component {

  render() {
    return (
      <StickerList
        onClickSticker={this.props.addCustomization}
        stickers={this.props.stickers}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    stickers: currentPageStickers(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCustomization: (sticker) => {
      dispatch({ type: 'ADD_CUSTOMIZATION', sticker });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StickerListContainer);
