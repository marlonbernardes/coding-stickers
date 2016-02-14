import React, { Component } from 'react';
import StickerListItem from '../StickerListItem';
import './StickerList.scss';

export default class StickerList extends Component {

  renderStickers() {
    return this.props.stickers.map((sticker, i) => (
      <StickerListItem key={i} onClickSticker={this.props.onClickSticker} sticker={sticker} />
    ));
  }

  render() {
    return (
      <div className="sticker-list-container">
        <ul>
          { this.renderStickers() }
        </ul>
      </div>
    );
  }
}
