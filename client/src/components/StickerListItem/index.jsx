import React, { Component } from 'react';
import Sticker from '../Sticker';

export default class StickerListItem extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClickSticker(this.props.sticker);
  }

  render() {
    const image = this.props.sticker.get('image');
    return (
      <li className="sticker-line">
        <Sticker image={image} onClick={this.handleClick}/>
      </li>
    );
  }

}
