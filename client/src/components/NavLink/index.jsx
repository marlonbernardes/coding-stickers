import React, { Component } from 'react';
import NavBar from '../NavBar';
import styles from './NavLink.module.scss';

export default class NavLink extends Component {
  render() {
    const linkClassName = this.props.active ? styles.active : styles.link;
    return (
      <li className={styles.listItem}>
        <a className={linkClassName} href={this.props.href} title={this.props.title}>
          { this.props.text }
        </a>
      </li>
    );
  }
}
