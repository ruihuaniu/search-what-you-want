import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header-container">
            <div className="header-container-logo">SEARCH</div>
            {/* <div className="header-container-menu"> */}
            <ul className="menu-container">
                <li><Link to={"/"} className="menu-item">Home</Link></li>
                <li><Link to={"/shop"} className="menu-item">Shop</Link></li>
            </ul>
            {/* </div> */}
        </div>
    )
}

export default Header
