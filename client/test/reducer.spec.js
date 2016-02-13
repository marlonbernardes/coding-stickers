import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import { customization }  from '../src/reducer';

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
});
