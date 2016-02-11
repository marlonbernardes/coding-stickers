import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CustomizationWidget from '../../src/components/CustomizationWidget';

describe('<CustomizationWidget />', () => {
  it('renders the component', () => {
    const rendered = shallow(<CustomizationWidget />);
    expect(rendered.find('.product-view')).to.have.length(1);
  });
});
