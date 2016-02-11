import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sticker from '../../src/components/Sticker';

describe('<Sticker />', () => {
  it(`renders the sticker's image`, () => {
    const rendered = shallow(<Sticker image="foo.png" />);
    const img = rendered.find('img');
    expect(img).to.have.length(1);
    expect(img.prop('src')).to.eql('foo.png');
  });

  it(`triggers the onClick event`, () => {
    let triggered = false;
    const rendered = shallow(<Sticker onClick={() => triggered = true } image="foo.png" />);
    rendered.simulate('click');
    expect(triggered).to.be.true
  });

});
