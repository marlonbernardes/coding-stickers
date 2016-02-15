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
      restrict: {
        restriction: '.dropzone',
        endOnly: true,
      },
    });
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

  calculateImageStyle() {
    const imageWidthInPixels = 550;
    const {productWidthInInches,productHeightInInches,widthInInches,heightInInches} = this.props;
    // Firstly we determine the product height in pixels, based on its real dimensions (inches)
    const productHeightInPx =
      (imageWidthInPixels * productHeightInInches) /productWidthInInches;
    // ... then we compute the stickers height and width based on the product height
    const height = (productHeightInPx * heightInInches) / productHeightInInches;
    const width = (widthInInches * height) / heightInInches;
    return {
      width: `${width}px`,
      height: `${height}px`
    };
  }

  render() {
    const selectedClass = this.props.selected ? 'draggable-selected' : '';
    return (
      <div ref="element"
        className={`draggable-sticker ${selectedClass}`}
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
