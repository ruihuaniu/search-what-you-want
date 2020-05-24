import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';


describe('SearchBar component', () => {
    const wrapper = shallow(<SearchBar />)

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should have the className', () => {
        expect(wrapper.hasClass('.searchBar-container')).toBeTruthy();
    })

    it('should have the form element', () => {
        expect(wrapper.find('form').length).toBe(1)
    })
})