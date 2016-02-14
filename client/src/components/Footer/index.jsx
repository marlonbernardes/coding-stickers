import React, { Component } from 'react';
import styles from './Footer.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <a className={styles.link} href="https://www.stickermule.com">
          <span className={styles.text}>Stickers by</span>
          <img className={styles.image} src="/img/general/logo.svg"/>
        </a>
      </div>
    );
  }
}
