import React, { Component } from 'react';

export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <h1>base layout</h1>
        { this.props.children }
      </div>
    );
  }
}
