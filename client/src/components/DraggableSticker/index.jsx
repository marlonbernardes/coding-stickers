import React, { Component } from 'react';
import './DraggableSticker.scss';

class DraggableSticker extends Component {

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable({
      inertia: true,
      onmove: this.onMoveSticker.bind(this),
      onend: this.onMoveEnd.bind(this),
      restrict: {
        restriction: '.dropzone',
      },
    });
  }

  onMoveEnd(event) {
    this.props.onMoveEnd(
      this.props.index,
      this.getCurrentX(event.target),
      this.getCurrentY(event.target)
    );
  }

  onMoveSticker(event) {
    const target = event.target;
    const x = this.getCurrentX(target, this.props.x) + event.dx;
    const y = this.getCurrentY(target, this.props.y) + event.dy;
    target.style.transform = `translate(${x}px, ${y}px)`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  getCurrentX(element, defaultValue = 0) {
    return parseFloat(element.getAttribute('data-x')) || defaultValue;
  }

  getCurrentY(element, defaultValue = 0) {
    return parseFloat(element.getAttribute('data-y')) || defaultValue;
  }

  // TODO: Refactor
  calculateImageStyle() {
    const imageWidthInPixels = 550;

    // TODO: Extract <Product> component!
    // MacBook measurements
    const productMeasurements = {
      width: 14.13,
      height: 9.73,
    };

    // Firstly we determine the product height in pixels, based on its real dimensions (inches)
    const productHeightInPx =
      (imageWidthInPixels * productMeasurements.height) / productMeasurements.width;
    // ... then we compute the stickers height and width based on the product height
    const height = (productHeightInPx * this.props.heightInInches) / productMeasurements.height;
    const width = (this.props.widthInInches * height) / this.props.heightInInches;
    return {
      width: `${width}px`,
      height: `${height}px`,
    };
  }

  render() {
    const style = {
      transform: `translate(${this.props.x}px, ${this.props.y}px)`,
    };

    return (
      <div ref="element" className="draggable-sticker" style={ style }>
        <img src={this.props.image} style={this.calculateImageStyle()}/>
      </div>
    );
  }
}


export default DraggableSticker;
