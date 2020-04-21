import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className="header-container">
            <div className="header-container-logo">SEARCH</div>
            <div className="header-container-menu"><a href="/" className="menu-home">Home</a></div>
        </div>
    )
}

export default Header
