import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PageHeader from '../../src/components/PageHeader';
import NavBar from '../../src/components/NavBar';

describe('<PageHeader />', () => {
  it(`renders the page headers' nav bar`, () => {
    const rendered = shallow(<PageHeader />);
    const navBar = rendered.find(NavBar);
    expect(navBar).to.have.length.of(1);
  });
});
