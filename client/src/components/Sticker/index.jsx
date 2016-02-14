import React, { Component } from 'react';
import styles from './Sticker.module.scss';

export default class Sticker extends Component {

  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className={styles.sticker} >
          <img ref="target" src={this.props.image} className={styles.image} />
        </div>
      </div>
    );
  }
}
