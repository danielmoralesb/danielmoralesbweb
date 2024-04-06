import logo from '../images/logos/daniel-morales-logo.svg';
import logoGold from '../images/logos/daniel-morales-logo-gold.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a href="/" className="footer__logo-link">
                    <img src={logo} alt="Daniel Morales B Logo" className="footer__logo-image"/>
                    <img src={logoGold} alt="Daniel Morales B Logo" className="footer__logo-image-gold" />
                    <span className="sr-only">Home link</span>
                </a>
                <nav className="footer__nav-wrapper">
                    <ul className="footer__nav">
                        <li className={`footer__item ${isActive("websites")}`}><a href="websites" className="footer__link"><span>Websites</span></a></li>
                        <li className={`footer__item ${isActive("designs")}`}><a href="designs" className="footer__link"><span>Designs</span></a></li>
                    </ul>
                    <ul className="footer__nav footer__nav--platforms">
                        <li className="footer__item"><a href="https://www.linkedin.com/in/danielmoralesb/" className="footer__link footer__link--linkedin" title="linkedin" target="_blank" rel="noreferrer"><span className="sr-only">Linkedin</span></a></li>
                        <li className="footer__item"><a href="https://codepen.io/danielmoralesportfolio" className="footer__link footer__link--codepen"><span className="sr-only">Codepen</span></a></li>
                        <li className="footer__item"><a href="https://github.com/danielmoralesb" className="footer__link footer__link--github"><span className="sr-only">Github</span></a></li>
                        <li className="footer__item"><a href="https://dribbble.com/danielmoralesb" className="footer__link footer__link--dribbble"><span className="sr-only">Dribbble</span></a></li>
                        <li className="footer__item"><a href="/Daniel_Morales_Resume_2024.pdf" className="btn btn--secondary btn--icon btn--icon--resume-gold" title="Daniel Morales Resume" target="_blank" rel="noreferrer">Resume</a></li>
                    </ul>
                </nav>
                <div className="footer__copyright-sitemap">
                    <p>
                        <a href="/sitemap.xml">Site Map</a>
                        |
                        <span>Copyright&#169; 2024 Daniel Morales B</span>
                    </p>
                </div>
            </div>
        </footer>
    )
    function isActive(path) {
        return window.location.pathname === `/${path}` ? "active" : "";
    }
}

export default Footer;