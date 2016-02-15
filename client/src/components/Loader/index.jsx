import React, { Component } from 'react';
import styles from './loader.scss';

export default class Loader extends Component {

  hide() {
    this.refs.overlay.style.display = 'none';
  }

  show() {
    this.refs.overlay.style.display = 'block';
  }

  render() {
    return (
      <div ref="overlay" className="overlay-loader">
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
