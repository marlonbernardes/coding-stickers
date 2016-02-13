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
      const sticker = new Map({ id: 100, image: 'foo.png' });
      const actual = customization(ImmutableList.of(), { type: 'ADD_STICKER', sticker });
      const expected = ImmutableList.of(new Map({ id: 100, image: 'foo.png' }));
      expect(actual).to.eql(expected);
    });

    it('should allow to clear customizations', () => {
      const sticker = new Map({ id: 100, image: 'foo.png' });
      const actual = customization(
        ImmutableList.of(sticker, sticker),
        { type: 'CLEAR_CUSTOMIZATION' }
      );

      const expected = ImmutableList.of();
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
      const sticker = new Map({ id: 100, image: 'foo.png' });
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
