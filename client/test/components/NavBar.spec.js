import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/NavBar';
import NavLink from '../../src/components/NavLink';

describe('<NavBar />', () => {
  it('renders all navigation Links', () => {
    const rendered = shallow(
      <NavBar>
        <NavLink title="Custom Stickers" text="Stickers" href="foo.html" />
        <NavLink title="Marketplace" text="Marketplace" href="bar.html" />
        <NavLink title="Customize" text="Customize" href="/" active={true} />
      </NavBar>
    );

    const links = rendered.find(NavLink);
    expect(links.at(0).prop('title')).to.eql('Custom Stickers');
    expect(links.at(1).prop('title')).to.eql('Marketplace');
    expect(links.at(2).prop('title')).to.eql('Customize');
  });
});
