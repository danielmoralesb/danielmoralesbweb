import { data } from '../data';
import logo from '../images/logos/daniel-morales-logo.svg';
import logoGold from '../images/logos/daniel-morales-logo-gold.svg';

function Footer() {
    function isActive(path) {
        return window.location.pathname === `/${path}` ? "active" : "";
    }
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
                        {
                            data.footerNav.pages.map((page, index) => (
                                <li key={index} className={`footer__item ${isActive(page.url)}`}>
                                    <a href={page.url} className="footer__link" title={page.name}><span>{page.name}</span></a>
                                </li>
                                )
                            )
                        }
                    </ul>
                    <ul className="footer__nav footer__nav--platforms">
                        {
                            data.footerNav.platforms.map((platform, index) => (
                                <li key={index} className="footer__item">
                                    {
                                        platform.name === "Resume" 
                                        ? <a href={platform.url} className="btn btn--secondary btn--icon btn--icon--resume-gold" title={platform.name} target="_blank" rel="noreferrer">{platform.name}</a> 
                                        :
                                        <a href={platform.url} className={`footer__link footer__link--${platform.name}`} title={platform.name} target="_blank" rel="noreferrer"><span className="sr-only">{platform.name}</span></a>
                                    }
                                </li>
                                )
                            )
                        }
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
}

export default Footer;