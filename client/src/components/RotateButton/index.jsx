import React, { Component } from 'react';
import styles from './RotateButton.module.scss';

class RotateButton extends Component {

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable(true)
        .on('dragend', this.onEndRotation.bind(this))
        .on('dragmove', this.onRotate.bind(this));
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // Dont update while it is rotating.
  //   // return !isRotating;
  //   return true;
  // }


  onEndRotation(event) {
    // update reference X and Y
  }


  onRotate(event) {
    const startingPoint = this.props.referencePoint(event);
    const currentPoint = [ event.pageX, event.pageY ];
    const degrees = calculateRotationDegrees(startingPoint, currentPoint);
    this.props.rotate(degrees);
  }

  render() {
    return (
      <button ref="element" className={styles.default}>
        <span style={{background: 'url(/img/rotate-icon.png)'}} className={styles.button}></span>
      </button>
    );
  }
}

export function calculateRotationDegrees(startingPoint, currentPoint) {
  const angleRadians = Math.atan2(currentPoint[1] - startingPoint[1], currentPoint[0] - startingPoint[0]);
  const angleDegrees = angleRadians * 180 / Math.PI;
  return angleDegrees;
}

export default RotateButton;
