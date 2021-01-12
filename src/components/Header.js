import React, { useState } from 'react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menuBtn, setMenuBtn] = useState('')
    const [menu, setMenu] = useState('')
    const [menuNav, setMenuNav] = useState('')
    const [NavItem, setNavItem] = useState('')

    const openMenu = () => {
        setMenuBtn('close')
        setMenu('show')
        setMenuNav('show')
        setNavItem('show')
        setShowMenu(true)
    }

    const closeMenu = () => {
        setMenuBtn('')
        setMenu('')
        setMenuNav('')
        setNavItem('')
        setShowMenu(false)
    }

    const toggleMenu = () => {
        if (!showMenu) {
        openMenu()
        } else {
        closeMenu()
        }
    }
    return (
        <header>
            <div className="brand">
                <a href="/"><h1>Kage <span>Dev</span></h1></a>
            </div>
            <div className={'menu-btn ' + menuBtn} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={'menu ' + menu}>
                <ul className={'menu-nav ' + menuNav}>
                <li className={'nav-item ' + NavItem}>
                    <a href="/" className="nav-link" onClick={toggleMenu}>
                    Start
                    </a>
                </li>
                <li className={'nav-item ' + NavItem}>
                    <a href="/service" className="nav-link" onClick={toggleMenu}>
                    Service
                    </a>
                </li>
                <li className={'nav-item ' + NavItem}>
                    <a href="/work" className="nav-link" onClick={toggleMenu}>
                    Work
                    </a>
                </li>
                <li className={'nav-item ' + NavItem}>
                    <a href="/aboutme" className="nav-link" onClick={toggleMenu}>
                    About Me
                    </a>
                </li>
                <li className={'nav-item ' + NavItem}>
                    <a href="/contact" className="nav-link" onClick={toggleMenu}>
                    Contact
                    </a>
                </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
