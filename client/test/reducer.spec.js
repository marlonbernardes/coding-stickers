import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import { customization, stickers }  from '../src/reducer';

describe('reducer', () => {

  describe('customization', () => {
    it('should return the initial state', () => {
      const actual = customization(undefined, {});
      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });

    it('should allow to add stickers', () => {
      const sticker = new Map({ index: 100, image: 'foo.png' });
      const actual = customization(ImmutableList.of(), { type: 'ADD_CUSTOMIZATION', sticker });
      const expected = ImmutableList.of(new Map({ index: 100, image: 'foo.png' }));
      expect(actual).to.eql(expected);
    });

    it('should allow a sticker to be removed', () => {
      const firstSticker = new Map({ index: 0, x: 0, y: 0 });
      const secondSticker = new Map({ index: 1, x: 0, y: 0 });
      const expected = ImmutableList.of(firstSticker);
      const actual = customization(
        ImmutableList.of(firstSticker, secondSticker),
        { type: 'REMOVE_CUSTOMIZATION', index: 1 }
      );
      expect(actual).to.eql(expected);
    });

    it('should allow a sticker to be selected', () => {
      const sticker = new Map({ index: 0  });
      const selectedSticker = new Map({ index: 0, selected: true })
      const expected = ImmutableList.of(sticker, selectedSticker);
      const actual = customization(
        ImmutableList.of(sticker, sticker),
        { type: 'SELECT_STICKER', index: 1 }
      );
      expect(actual).to.eql(expected);
    });

    it('should allow to clear customizations', () => {
      const sticker = new Map({ index: 100, image: 'foo.png' });
      const actual = customization(
        ImmutableList.of(sticker, sticker),
        { type: 'CLEAR_CUSTOMIZATION' }
      );

      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });

    it(`should allow a customization's position to be updated`, () => {
      const firstSticker = new Map({ index: 0, x: 0, y: 0 });
      const secondSticker = new Map({ index: 1, x: 0, y: 0 });
      const actual = customization(
        ImmutableList.of(firstSticker, secondSticker),
        { type: 'UPDATE_POSITION', index: 1, x: 50, y: 60 }
      );
      const expected = ImmutableList.of(
        firstSticker,
        new Map({ index: 1, x: 50, y: 60 })
      );
      expect(actual).to.eql(expected);
    });
  });

  describe('stickers', () => {
    it('should return an empty list as the initial state', () => {
      const actual = stickers(undefined, {})
      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });

    it('should display only the received stickers', () => {
      const sticker = new Map({ index: 100, image: 'foo.png' });
      const currentState = ImmutableList.of(sticker);
      const expected = ImmutableList.of(sticker, sticker, sticker);
      const actual = stickers(
        currentState,
        {
          type: 'RECEIVE_STICKERS',
          stickers: ImmutableList.of(sticker, sticker, sticker)
        }
      );
      expect(actual).to.eql(expected);
    })
  });
});
