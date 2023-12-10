import React, { useState } from 'react'
import "./header.css"

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Faical</a>
                <div className={toggle ? "nav_menu show_menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close" onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header