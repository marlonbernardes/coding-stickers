import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import reducer from '../src/reducer';

describe('reducer', () => {

  it('should return the initial state', () => {
    const actual = reducer(undefined, {});
    const expected = ImmutableList.of();
    expect(actual).to.eql(expected);
  });

  it('should handle ADD_STICKER', () => {
    const sticker = new Map({ id: 100, image: 'foo.png' });
    const actual = reducer(ImmutableList.of(), { type: 'ADD_STICKER', sticker });
    const expected = ImmutableList.of(new Map({ id: 100, image: 'foo.png' }));
    expect(actual).to.eql(expected);
  });

  describe('CLEAR_CUSTOMIZATION', () => {
    it('should return an empty list', () => {
      const sticker = new Map({ id: 100, image: 'foo.png' });
      const actual = reducer(
        ImmutableList.of(sticker, sticker),
        { type: 'CLEAR_CUSTOMIZATION' }
      );

      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });
  })


});
