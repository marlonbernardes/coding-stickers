import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import { shallow } from 'enzyme';
import { DraggableStickerContainer } from '../../src/containers/DraggableStickerContainer';
import DraggableSticker from '../../src/components/DraggableSticker';

describe('<DraggableStickerContainer />', () => {

  it('renders the draggable sticker', () => {
    const product = new Map({
      widthInInches: 10,
      heightInInches: 20,
    });
    const selectedStickers = ImmutableList.of(new Map({
      index: 0,
      x: 10,
      y: 20,
      image: 'foo.png',
    }))
    const component = shallow((
      <DraggableStickerContainer
        product={product}
        selectedStickers={selectedStickers}
      />
    ));
    const html = component.html();
    expect(html).to.contain('foo.png');
    expect(html).to.contain('draggable-sticker');
  });

});
