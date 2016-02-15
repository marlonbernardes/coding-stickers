import React, { Component, PropTypes } from 'react';
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
    const widthInInches = this.props.sticker.get('widthInInches');
    const heightInInches = this.props.sticker.get('heightInInches');
    return (
      <li className="sticker-line">
        <Sticker
          image={image}
          widthInInches={widthInInches}
          heightInInches={heightInInches}
          onClick={this.handleClick}
        />
      </li>
    );
  }

}

StickerListItem.propTypes = {
  sticker: PropTypes.any,
  onClickSticker: PropTypes.func,
};
