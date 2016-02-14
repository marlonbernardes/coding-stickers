import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Range } from 'immutable';
import Pagination, { pageRange } from '../../src/components/Pagination';

describe('<Pagination />', () => {

  it(`always renders the next and previous button`, () => {
    const pagination = shallow(<Pagination totalPages={1} currentPage={1}/>);
    const nextButton = pagination.find('.next-button');
    const prevButton = pagination.find('.prev-button');
    expect(nextButton).to.have.length.of(1);
    expect(prevButton).to.have.length.of(1);
  });

  it('displays up to 9 page buttons', () => {
    const pagination = shallow(<Pagination totalPages={1000} currentPage={1}/>);
    const buttons = pagination.find('.page-button');
    expect(buttons).to.have.length.of(9);
  });

  it('displays the next and previous buttons', () => {
    const pagination = shallow(<Pagination totalPages={1000} currentPage={1}/>);
    expect(pagination.find('.next-button')).to.have.length.of(1);
    expect(pagination.find('.prev-button')).to.have.length.of(1);
  });


  describe('page range', () => {
    it('calculates the correct range', () => {
      const maxPages = 10;
      expect(pageRange(1,100, maxPages).size).to.eql(maxPages);
      expect(pageRange(20, 100, maxPages).size).to.eql(maxPages);
      expect(pageRange(1,5, maxPages).size).to.eql(5);
    });
  })

});
