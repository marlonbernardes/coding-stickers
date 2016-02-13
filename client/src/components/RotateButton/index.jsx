import React, { Component } from 'react';
import styles from './RotateButton.module.scss';

export function calculateRotationDegrees(startingPoint, currentPoint) {
  const x = currentPoint[1] - startingPoint[1];
  const y = currentPoint[0] - startingPoint[0];
  const angleRadians = Math.atan2(x, y);
  const angleDegrees = angleRadians * 180 / Math.PI;
  return angleDegrees;
}

class RotateButton extends Component {

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable(true)
        .on('dragend', this.onEndRotation.bind(this))
        .on('dragmove', this.onRotate.bind(this));
  }

  onEndRotation() {
    // update reference X and Y
  }

  onRotate(event) {
    const startingPoint = this.props.referencePoint(event);
    const currentPoint = [event.pageX, event.pageY];
    const degrees = calculateRotationDegrees(startingPoint, currentPoint);
    this.props.rotate(degrees);
  }

  render() {
    return (
      <button ref="element" className={this.props.active ? styles.active : styles.default}>
        <span style={{ background: 'url(/img/rotate-icon.png)' }} className={styles.button}></span>
      </button>
    );
  }
}

export default RotateButton;
