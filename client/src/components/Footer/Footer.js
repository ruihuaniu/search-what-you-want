
import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className="footer-container">
            <a href="https://github.com/ruihuaniu/search-what-you-want" className="footer-icon"><img src="/images/github.png" alt="github icon" />  </a>
            <p>`Copyright@ ${new Date().getFullYear} Ruihua All Rights Reserved`</p>
        </div>
    )
}

export default Footer
