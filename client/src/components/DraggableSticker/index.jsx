import React, { Component } from 'react';
import './DraggableSticker.scss';

class DraggableSticker extends Component {

  constructor() {
    super();
    // TODO: Remove direct state access
    this.state = {
      x: 0,
      y: 0,
    };
  }

  componentDidMount() {
    const interact = require('interact.js');
    interact(this.refs.element).draggable({
      inertia: true,
      onmove: this.onMoveSticker.bind(this),
      // TODO Maybe use "onend" event to track the change ONLY when the movement stops.
      restrict: {
        restriction: 'parent',
      },
    });
  }

  onMoveSticker(event) {
    // const target = event.target || event.srcElement;
    // TODO: Remove setState call and store/retrieve state from redux store.
    // I need to consider updating the DOM directly and storing the state only when the
    // movement stops. I don't wanna trigger a billion events to redux store.
    this.setState({
      x: this.state.x + event.dx,
      y: this.state.y + event.dy,
    });
  }

  render() {
    // TODO: Retrieve state from redux store
    const style = {
      transform: `translate(${this.state.x}px, ${this.state.y}px)`,
    };
    return (
      <div ref="element" className="draggable-sticker" style={ style }>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default DraggableSticker;
