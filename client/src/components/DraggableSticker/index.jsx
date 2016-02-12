import React, { Component } from 'react';
import './DraggableSticker.scss';

class DraggableSticker extends Component {

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable({
      inertia: true,
      onmove: this.onMoveSticker,
      restrict: {
        restriction: 'parent',
      },
    });
  }

  onMoveSticker(event) {
    const target = event.target || event.srcElement;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    target.style.position = 'absolute';
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }


  render() {
    return (
      <div ref="element" className="draggable-sticker">
        <img src={this.props.image} />
      </div>
    );
  }
}

export default DraggableSticker;
