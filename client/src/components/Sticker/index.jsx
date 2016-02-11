import React, { Component } from 'react';
import styles from './Sticker.module.scss';

export default class Sticker extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className={styles.sticker} >
          <img className={styles.image} src={this.props.image}/>
        </div>
        <span>$ 3.00</span>
      </div>
    );
  }
}
