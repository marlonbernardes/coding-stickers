import React, { Component } from 'react';
import StickerListItem from '../StickerListItem';
import Ps from 'perfect-scrollbar';
import './StickerList.scss';

export default class StickerList extends Component {

  renderStickers() {
    return this.props.stickers.map((sticker, i) => (
      <StickerListItem key={i} onClickSticker={this.props.onClickSticker} sticker={sticker} />
    ));
  }

  render() {
    return (
      <div>
        <div className="nl">
          <div className="nl-overflow" ref="stickerContainer">
            <ul className="nl-ul">
              { this.renderStickers() }
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
