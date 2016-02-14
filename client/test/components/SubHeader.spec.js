import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SubHeader from '../../src/components/SubHeader';

describe('<SubHeader />', () => {

  it(`renders the background`, () => {
    const component = shallow(<SubHeader image="foo.png"/>);
    expect(component.prop('style').background).to.contain('foo.png');
  });
});
