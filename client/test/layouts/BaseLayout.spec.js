import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import BaseLayout from '../../src/layouts/BaseLayout';
import GitHubRibbon from '../../src/components/GitHubRibbon';

describe('<BaseLayout />', () => {

  it('renders the GitHub ribbon', () => {
    const component = shallow(<BaseLayout />);
    expect(component.find(GitHubRibbon)).to.have.length(1);
  });

});
