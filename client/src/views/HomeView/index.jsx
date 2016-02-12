import React, { Component } from 'react';
import CustomizationContainer from '../../containers/CustomizationContainer';
import PageHeader from '../../components/PageHeader';

export default class HomeView extends Component {

  render() {
    return (
      <div>
        <PageHeader/>
        <CustomizationContainer />
      </div>
    );
  }
}
