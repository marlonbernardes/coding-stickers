import React, { Component, PropTypes } from 'react';
import GitHubRibbon from '../../components/GitHubRibbon';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';
import './BaseLayout.scss';

const propTypes = {
  children: PropTypes.element,
};

class BaseLayout extends Component {
  render() {
    return (
      <div className="page">
        <GitHubRibbon repository="marlonbernardes/sticker"/>
        <PageHeader/>
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

BaseLayout.propTypes = propTypes;

export default BaseLayout;
