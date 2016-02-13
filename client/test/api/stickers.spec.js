import chai, { expect } from 'chai';
import axios from 'axios';
import StickersApi from '../../src/api/stickers';

describe('Stickers API', () => {
  it('performs ', () => {
    const spy = chai.spy.on(axios, 'get');
    StickersApi.findStickers('ee');
    expect(spy).to.have.been.called.with('/sticker_data.json');
  });
});
