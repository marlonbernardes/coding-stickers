import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Loader from '../../src/components/Loader';

describe('<Loader />', () => {
  it('renders the loader markup', () => {
    const component = mount(<Loader />);
    expect(component.find('.loader')).to.have.length(1);
  });
});
