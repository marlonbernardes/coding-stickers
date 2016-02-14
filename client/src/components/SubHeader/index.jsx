import React, { Component } from 'react';
import styles from './SubHeader.module.scss';

export default class SubHeader extends Component {
  render() {
    const style = {
      background: `url(${this.props.image})`,
    };

    return (
      <div className={styles.container} style={style}>
      </div>
    );
  }
}
