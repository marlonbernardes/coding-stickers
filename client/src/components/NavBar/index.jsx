import React, { Component } from 'react';
import styles from './NavBar.module.scss';

export default class NavBar extends Component {
  render() {
    const style = {
      backgroundImage: 'url(/img/general/logo.svg)',
    };

    return (
      <div className={styles.navbar}>
        <div className="container">
            <a style={style} className={styles.logo} href="https://www.stickermule.com">Sticker Mule</a>
            <ul className={styles.list}>
              { this.props.children }
            </ul>
        </div>
      </div>
    );
  }
}
