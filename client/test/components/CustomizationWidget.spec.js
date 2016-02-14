import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CustomizationWidget from '../../src/components/CustomizationWidget';

describe('<CustomizationWidget />', () => {
  it('renders the search input', () => {
    const rendered = shallow(<CustomizationWidget />);
    expect(rendered.find('.stickers-search')).to.have.length(1);
  });
});
