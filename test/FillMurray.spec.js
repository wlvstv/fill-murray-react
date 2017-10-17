import React from 'react';
import FillMurray from '../src/index';

describe('FillMurray', () => {
    const wrapper = shallow(<FillMurray />);

    it('should be an image', () => {
        expect(wrapper.type()).to.eql('img');
    });
});