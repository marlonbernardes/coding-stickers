import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sticker from '../../src/components/Sticker';

describe('<Sticker />', () => {
  it(`renders the sticker's image`, () => {
    const rendered = shallow(<Sticker image="foo.png" />);
    const image = rendered.find('.sticker-image');
    expect(image).to.have.length(1);
  });


  it(`triggers the onClick event`, () => {
    let triggered = false;
    const rendered = shallow(<Sticker onClick={() => triggered = true } image="foo.png" />);
    rendered.simulate('click');
    expect(triggered).to.be.true
  });

});
