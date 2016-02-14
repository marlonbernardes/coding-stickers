import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HomeView from '../../src/views/HomeView';
import CustomizationContainer from '../../src/containers/CustomizationContainer';
import PageHeader from '../../src/components/PageHeader';

describe('<HomeView />', () => {

  it('renders the customization container', () => {
    const component = shallow(<HomeView />);
    expect(component.find(CustomizationContainer)).to.have.length(1);
  });

});
