import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe("Header component", () => {

    const wrapper = shallow(<Header />)
    it("should have header-container class", () => {
        expect(wrapper.hasClass('header-container')).toBeTruthy();
    })

    it("should have logo-container class ", () => {
        expect(wrapper.find("logo-container")).toBe(1)
    })

    it("should have menu-container class ", () => {
        expect(wrapper.find("ul").hasClass("menu-container")).toBeTruthy()
    })

    it("should have menu-item class ", () => {
        expect(wrapper.find("li").hasClass("menu-item")).toBeTruthy()
    })
})