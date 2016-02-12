import React, { Component, PropTypes } from 'react';
import GitHubRibbon from '../../components/GitHubRibbon';
import styles from './BaseLayout.scss';

const propTypes = {
  children: PropTypes.element,
};

class BaseLayout extends Component {
  render() {
    return (
      <div className="page">
        <GitHubRibbon repository="marlonbernardes/sticker"/>
        { this.props.children }
      </div>
    );
  }
}

BaseLayout.propTypes = propTypes;

export default BaseLayout;
