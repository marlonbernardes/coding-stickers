import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NavLink from '../../src/components/NavLink';
import styles from  '../../src/components/NavLink/NavLink.module.scss';

describe('<NavLink />', () => {

  beforeEach(() => {
    styles.active = 'active-class';
    styles.link = 'link-class';
  })

  it('renders the correct properties', () => {
    const rendered = shallow(<NavLink title="Foo" href="bar.html" text="Click"/>);
    const link = rendered.find('a');
    expect(link.text()).to.eql('Click');
    expect(link.prop('href')).to.eql('bar.html');
    expect(link.prop('title')).to.eql('Foo');
  });

  it('renders active links', () => {
    const rendered = shallow(<NavLink title="Foo" active={true}/>);
    const link = rendered.find('a');
    expect(link.prop('className')).to.eql('active-class')
  })

  it('renders non-active links', () => {
    const rendered = shallow(<NavLink title="Foo" active={false}/>);
    const link = rendered.find('a');
    expect(link.prop('className')).to.eql('link-class')
  })
});
