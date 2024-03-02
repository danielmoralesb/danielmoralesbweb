import logo from '../images/daniel-morales-logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a href="/" className="footer__logo-link">
                    <img src={logo} alt="Daniel Morales B Logo"/>
                    <span className="sr-only">Home link</span>
                </a>
                <nav className="footer__nav-wrapper">
                    <ul className="footer__nav">
                        <li className="footer__item"><a href="websites" className="footer__link"><span>Websites</span></a></li>
                        <li className="footer__item"><a href="designs" className="footer__link"><span>Designs</span></a></li>
                        <li className="footer__item"><a href="contact" className="footer__link"><span>Contact</span></a></li>
                    </ul>
                    <ul className="footer__nav footer__nav--platforms">
                        <li className="footer__item"><a href="https://codepen.io/danielmoralesportfolio" className="footer__link footer__link--codepen"><span className="sr-only">Codepen</span></a></li>
                        <li className="footer__item"><a href="https://github.com/danielmoralesb" className="footer__link footer__link--github"><span className="sr-only">Github</span></a></li>
                        <li className="footer__item"><a href="https://dribbble.com/danielmoralesb" className="footer__link footer__link--dribbble"><span className="sr-only">Dribbble</span></a></li>
                        <li className="footer__item"><a href="/" className="btn btn--secondary btn--icon btn--icon--resume-gold">Resume</a></li>
                    </ul>
                </nav>
                <div className="footer__copyright-sitemap">
                    <p>
                        <a href="/">Site Map</a>
                        |
                        <span>Copyright&#169; 2024 Danel Morales B</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;