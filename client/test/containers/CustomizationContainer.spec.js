import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { CustomizationContainer } from '../../src/containers/CustomizationContainer';
import CustomizationWidget from '../../src/components/CustomizationWidget';

describe('<CustomizationContainer />', () => {

  it('renders a CustomizationWidget', () => {
    const component = shallow(<CustomizationContainer />);
    expect(component.find(CustomizationWidget)).to.have.length(1);
  });
  
});
