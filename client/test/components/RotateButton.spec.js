import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import RotateButton, { calculateRotationDegrees } from '../../src/components/RotateButton';

describe('<RotateButton />', () => {
  it(`renders the button`, () => {
    const button = shallow(<RotateButton />);
    expect(button.find('button')).to.have.length(1);
  });

  describe('calculateRotationDegrees', () => {
    /*
       Example of 45deg rotation:

       3|                3|       x
       2|    x      -->  2|
       1|__.__.__.       1|__.__.__.
         1  2  3          | 1  2  3
    */
    it('rotates 45 degrees', () => {
      const startPoint = [2, 2];
      const currentPoint = [3, 3];
      const result = calculateRotationDegrees(startPoint, currentPoint);
      expect(result).to.eql(45);
    });

    it('rotates -45 degrees', () => {
      const startPoint = [2, 2];
      const currentPoint = [3, 1];
      const result = calculateRotationDegrees(startPoint, currentPoint);
      expect(result).to.eql(-45);
    });

  })

});
