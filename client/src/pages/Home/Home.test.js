import React from 'react';
import { shallow } from 'enzyme'
import Home from './Home';

describe('Home component', () => {
    it('should have the home-container class ', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper.hasClass('home-container')).toBeTruthy();
    });
})

