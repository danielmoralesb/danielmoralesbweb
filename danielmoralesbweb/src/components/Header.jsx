import { useState } from 'react';
import logo from '../images/logos/daniel-morales-logo.svg';
import logoWhite from '../images/logos/daniel-morales-logo-white.svg';

function Header() {
    const [menuState, setMenuState] = useState(false);
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
                        <li className={`header__item ${isActive("websites")}`}><a href="websites" className="header__link"><span>Websites</span></a></li>
                        <li className={`header__item ${isActive("designs")}`}><a href="designs" className="header__link"><span>Designs</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
    function isActive(path) {
        return window.location.pathname === `/${path}` ? "active" : "";
    }
}

export default Header;