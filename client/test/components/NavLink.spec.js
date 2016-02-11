import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavLink from '../../src/components/NavLink';

describe('<NavLink />', () => {
  it('renders the correct properties', () => {
    const rendered = shallow(<NavLink title="Foo" href="bar.html" text="Click"/>);
    const link = rendered.find('a');
    expect(link.text()).to.eql('Click');
    expect(link.prop('href')).to.eql('bar.html');
    expect(link.prop('title')).to.eql('Foo');
  });
});
