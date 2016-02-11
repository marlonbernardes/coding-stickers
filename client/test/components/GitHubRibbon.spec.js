import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GitHubRibbon from '../../src/components/GitHubRibbon';

describe('<GitHubRibbon />', () => {
  it('renders the ribbon image', () => {
    const rendered = shallow(<GitHubRibbon />);
    expect(rendered.find('img')).to.have.length(1);
  });

  it('renders the correct repository url', () => {
    const repository = 'marlonbernardes/codingstickers';
    const rendered = shallow(<GitHubRibbon repository={repository}/>);
    expect(rendered.find('a').prop('href')).to.equal(`https://github.com/${repository}`);
  });
});
