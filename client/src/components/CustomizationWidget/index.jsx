import React, { Component } from 'react';
import styles from './CustomizationWidget.scss';

export default class CustomizationWidget extends Component {
  render() {
    return (
      <div className={styles.container}>
        <span>Customization Widget</span>
      </div>
    );
  }
}
