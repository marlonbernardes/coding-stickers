import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import { shallow } from 'enzyme';
import { DraggableStickerContainer } from '../../src/containers/DraggableStickerContainer';
import DraggableSticker from '../../src/components/DraggableSticker';

describe('<DraggableStickerContainer />', () => {

  it('passes the current position to the draggable sticker', () => {
    const selectedStickers = ImmutableList.of(new Map({
      index: 0,
      x: 10,
      y: 20,
      image: 'foo.png',
    }))
    const component = shallow(<DraggableStickerContainer selectedStickers={selectedStickers}/>);
    const sticker = component.find(DraggableSticker);
    expect(sticker.prop('x')).to.eql(10);
    expect(sticker.prop('y')).to.eql(20);
    expect(sticker.prop('image')).to.eql('foo.png');
  });

});
