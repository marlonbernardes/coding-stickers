import React, { Component } from 'react';
import RotateButton from '../RotateButton';
import enhanceWithClickOutside from 'react-click-outside';
import './DraggableSticker.scss';

export class DraggableSticker extends Component {

  constructor() {
    super();
    this.handleRotate = this.handleRotate.bind(this);
    this.calculateRotationReferencePoint = this.calculateRotationReferencePoint.bind(this);
    this.handleOnClickRemove = this.handleOnClickRemove.bind(this);
    this.handleOnClickSticker = this.handleOnClickSticker.bind(this);
  }

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable({
      inertia: true,
      onstart: this.handleOnClickSticker,
      onmove: this.onMoveSticker.bind(this),
      onend: this.onMoveEnd.bind(this),
      restrict: {
        restriction: '.dropzone',
        endOnly: true,
      },
    });
  }

  onMoveEnd() {
    this.props.onMoveEnd(
      this.props.index,
      (parseFloat(this.refs.element.getAttribute('data-x')) || 0),
      (parseFloat(this.refs.element.getAttribute('data-y')) || 0)
    );
  }

  onMoveSticker(event) {
    const target = this.refs.element;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.position = 'absolute';
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  calculateRotationReferencePoint() {
    const rect = this.refs.element.getBoundingClientRect();
    return [rect.left + (rect.width / 2), rect.top + (rect.height / 2)];
  }

  handleRotate(degrees) {
    this.refs.element.style.transform = `rotate(${degrees}deg)`;
  }

  handleOnClickRemove(event) {
    this.props.onClickRemove(this.props.index);
    event.stopPropagation();
  }

  handleOnClickSticker() {
    this.props.onClickSticker(this.props.index);
  }

  handleClickOutside() {
    this.props.onClickOutside();
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
    const selectedClass = this.props.selected ? 'draggable-selected' : '';
    const visibleClass = this.props.visible ? '' : 'hidden-sticker'
    return (
      <div ref="element"
        className={`draggable-sticker ${selectedClass} ${visibleClass}`}
        onClick={this.handleOnClickSticker}
      >
        <img ref="image" src={this.props.image} style={this.calculateImageStyle()}/>
        <button className="delete-button" onClick={this.handleOnClickRemove}><span>✕</span></button>
        <RotateButton
          rotate={this.handleRotate}
          referencePoint={this.calculateRotationReferencePoint}
        />
      </div>
    );
  }
}

export default enhanceWithClickOutside(DraggableSticker);
