import React from 'react';
import { shallow } from 'enzyme'
import Footer from './Footer'

describe("Footer component", () => {
    const wrapper = shallow(<Footer />)
    it("should has one <a> element as the child of the <div> element", () => {
        expect(wrapper.find('div>a').length).toBe(1);
    })

    it("should has the footer-container class", () => {
        expect(wrapper.hasClass('footer-container')).toBeTruthy()
    })

    it("should has the footer-icon class", () => {
        expect(wrapper.find('a').hasClass('footer-icon')).toBeTruthy()
    })

    it("should has the content", () => {
        expect(wrapper.contains(<p>Copyright@ 2020 Barton All Rights Reserved</p>)).toBeTruthy();
    })

})