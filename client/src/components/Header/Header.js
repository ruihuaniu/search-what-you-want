import React from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import { pathName } from '../../utilities/RoutePathName'

function Header() {
    const location = useLocation()
    //console.log("location ", location);


    return (
        <div className={location.pathname === pathName.home ? "header-container homepage-header" : "header-container"}>
            <div className="logo-container"><Link to={pathName.home} className="header-container-logo">SEARCH</Link></div>
            {/* <div><SearchBar /></div> */}
            {/* <div className="header-container-menu"> */}
            <ul className="menu-container">
                <li><Link to={pathName.home} className="menu-item">Home</Link></li>
                <li><Link to={pathName.result} className="menu-item">List</Link></li>
            </ul>
            {/* </div> */}
        </div >
    )
}

export default Header
