import React, { Component } from 'react';
import Sticker from '../Sticker';
import styles from './StickerList.scss';
import Ps from 'perfect-scrollbar';

export default class StickerList extends Component {

  componentDidMount() {
    Ps.initialize(this.refs.stickerContainer, {
      suppressScrollY: true,
      minScrollbarLength: 80
    });
  }

  renderStickers() {
    return this.props.stickers.map((sticker, i) => {
      return (
        <li className="sticker-line" key={i}>
          <Sticker
            onClick={() => this.props.onClickSticker(sticker)}
            image={sticker.image}/>
        </li>
      );
    })
  }

  render() {
    return (
      <div className="stickers-content">
        <div className="stickers-col-list">
          <div className="stickers-overflow" ref="stickerContainer">
            <ul className="stickers-list" style={{width: '115000px'}}>
              { this.renderStickers() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
