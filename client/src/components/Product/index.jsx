import React, { Component } from 'react';
import styles from './Product.module.scss';

export default class Product extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={this.props.image}/>
      </div>
    );
  }
}
