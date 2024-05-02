import { useState } from 'react';
import {data} from '../data';
import logo from '../images/logos/daniel-morales-logo.svg';
import logoWhite from '../images/logos/daniel-morales-logo-white.svg';

function Header() {
    const [menuState, setMenuState] = useState(false);

    function isActive(path) {
        return window.location.pathname === `/${path}` || (window.location.pathname === '/' && path === '') ? "active" : "";
    }

    return (
        <header className={menuState ? "header header--open" : "header"}>
            <div className="header__container">
                <div className="header__logo-wrapper">
                    <div className="header__logo">
                        <a href="/" className="header__logo-link">
                            <img src={logo} alt="Daniel Morales B Logo" className="header__logo-image"/>
                            <img src={logoWhite} alt="Daniel Morales B Logo" className="header__logo-image-white" />
                            <span className="sr-only">Home link</span>
                        </a>
                    </div>
                    <button className="header__toggle" onClick={() => setMenuState(!menuState)}>
                        <span className="sr-only">Toggle Nav</span>
                    </button>
                </div>
                <nav className="header__nav-wrapper">
                    <ul className="header__nav">
                        {
                            data.headerNav.map((nav, index) => (
                                <li key={index} className={`header__item ${isActive(nav.url)}`}>
                                    <a href={nav.url} className="header__link" title={nav.name}><span>{nav.name}</span></a>
                                </li>
                                )
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;