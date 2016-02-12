import React, { Component } from 'react';
import StickerListItem from '../StickerListItem';
import Ps from 'perfect-scrollbar';
import './StickerList.scss';

export default class StickerList extends Component {

  componentDidMount() {
    Ps.initialize(this.refs.stickerContainer, {
      suppressScrollY: true,
      minScrollbarLength: 80,
    });
  }

  renderStickers() {
    return this.props.stickers.map((sticker, i) => (
      <StickerListItem key={i} onClickSticker={this.props.onClickSticker} sticker={sticker} />
    ));
  }

  render() {
    return (
      <div className="stickers-content">
        <div className="stickers-col-list">
          <div className="stickers-overflow" ref="stickerContainer">
            <ul className="stickers-list" style={{ width: '115000px' }}>
              { this.renderStickers() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
