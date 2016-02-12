import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import StickerListItem from '../../src/components/StickerListItem';
import Sticker from '../../src/components/Sticker';

describe('<StickerListItem />', () => {

  const stickerData = {
    image: 'bla.png'
  };

  it('contains one sticker', () => {
    const rendered = shallow(<StickerListItem sticker={stickerData} />);
    expect(rendered.find(Sticker)).to.have.length(1);
  });

  it('displays the correct sticker image', () => {
    const rendered = shallow(<StickerListItem sticker={stickerData} />);
    const sticker = rendered.find(Sticker);
    expect(sticker.prop('image')).to.eql('bla.png');
  });

  it('attachs onClick function to stickers', () => {
    let actionPerformed = false;
    const callback = () => { actionPerformed = true };
    const rendered = shallow(<StickerListItem sticker={stickerData} onClickSticker={callback}/>);
    const sticker = rendered.find(Sticker);
    sticker.simulate('click');
    expect(actionPerformed, 'event was not triggered').to.be.true;
  });

});
