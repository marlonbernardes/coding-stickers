import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CustomizationWidget from '../../src/components/CustomizationWidget';

describe('<CustomizationWidget />', () => {
  it('renders the component', () => {
    const rendered = shallow(<CustomizationWidget />);
    expect(rendered.find('span')).to.have.length(1);
  });
});
