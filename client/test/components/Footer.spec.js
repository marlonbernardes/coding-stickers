import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import styles from '../../src/components/Footer/Footer.module.scss';
import Footer from '../../src/components/Footer';


describe('<Footer />', () => {

  it(`renders the container markup`, () => {
    styles.container = 'mockContainer';
    const component = shallow(<Footer />);
    expect(component.find('.mockContainer')).to.have.length(1);
  });

  it(`renders the link markup`, () => {
    styles.link = 'mockLink';
    const component = shallow(<Footer />);
    expect(component.find('.mockLink')).to.have.length(1);
  });

  it(`renders a image on the footer`, () => {
    styles.image = 'mockImage';
    const component = shallow(<Footer />);
    expect(component.find('.mockImage')).to.have.length(1);
  });

});
