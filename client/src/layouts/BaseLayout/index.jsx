import React, { Component, PropTypes } from 'react';

const propTypes = {
  children: PropTypes.element,
};


class BaseLayout extends Component {

  render() {
    return (
      <div>
        <h1>base layout</h1>
        { this.props.children }
      </div>
    );
  }
}

BaseLayout.propTypes = propTypes;

export default BaseLayout;
