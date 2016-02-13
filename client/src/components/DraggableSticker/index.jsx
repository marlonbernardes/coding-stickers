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

  render() {
    const style = {
      transform: `translate(${this.props.x}px, ${this.props.y}px)`,
    };
    return (
      <div ref="element" className="draggable-sticker" style={ style }>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default DraggableSticker;
