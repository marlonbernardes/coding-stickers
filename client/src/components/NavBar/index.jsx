import React, { Component, PropTypes } from 'react';
import styles from './NavBar.module.scss';

export default class NavBar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className="container">
          <a className={styles.brand}>CodingStickers</a>
          <ul className={styles.list}>
            { this.props.children }
          </ul>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  children: PropTypes.node,
};
