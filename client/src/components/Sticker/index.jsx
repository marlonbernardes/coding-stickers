import React, { Component, PropTypes } from 'react';
import Loader from '../Loader';
import styles from './Sticker.module.scss';

export default class Sticker extends Component {

  componentDidMount() {
    this.preloadImage(this.props.image);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.image !== nextProps.image) {
      this.preloadImage(nextProps.image);
    }
  }

  preloadImage(imageUrl) {
    const image = new Image();
    image.src = imageUrl;
    this.refs.image.style.backgroundImage = '';
    this.refs.loader.show();
    image.onload = () => {
      if (this.refs.loader) {
        this.refs.loader.hide();
        this.refs.image.style.backgroundImage = `url(${imageUrl})`;
      }
    };
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <div ref="image" className={`${styles.sticker} sticker-image`}>
          <Loader ref="loader" />
        </div>
      </div>
    );
  }
}

Sticker.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
