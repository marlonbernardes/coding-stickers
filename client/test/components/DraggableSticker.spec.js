import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import DraggableSticker from '../../src/components/DraggableSticker';

describe('<DraggableSticker />', () => {
  it(`renders the sticker's image`, () => {
    const rendered = shallow(<DraggableSticker image="foo.png" />);
    const img = rendered.find('img');
    expect(img).to.have.length(1);
    expect(img.prop('src')).to.eql('foo.png');
  });
});
