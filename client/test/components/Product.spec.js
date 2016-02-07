import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Product from '../../src/components/Product';

describe('<Product />', () => {
  it('renders the products image', () => {
    const rendered = shallow(<Product image='/product.png' />);
    const img = rendered.find('img');
    expect(img).to.have.length(1);
    expect(img.props().src).to.equal('/product.png');
  });
});
