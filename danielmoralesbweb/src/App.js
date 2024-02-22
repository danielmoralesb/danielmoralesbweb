import { useState } from 'react';
import logo from './images/daniel-morales-logo.svg';
import './App.css';
import './sass/styles.scss';

function App() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const [menuState, setMenuState] = useState(false);

  return (
    <div>
        <div className="container">
            <header className={menuState ? "header header--open" : "header"}>
                <div className="header__container">
                    <div className="header__logo-wrapper">
                        <div className="header__logo">
                            <a href="/" className="header__logo-link">
                                <img src={logo} alt="Daniel Morales Logo" />
                                <span className="sr-only">Home link</span>
                            </a>
                        </div>
                        <button className="header__toggle" onClick={() => setMenuState(!menuState)}>
                            <span className="sr-only">Toggle Nav</span>
                        </button>
                    </div>
                    <nav className="header__nav-wrapper">
                        <ul className="header__nav">
                            <li className="header__item"><a href="/" className="header__link"><span>Websites</span></a></li>
                            <li className="header__item"><a href="/" className="header__link"><span>Designs</span></a></li>
                            <li className="header__item"><a href="/" className="header__link"><span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="main main--styleguide">
                <h1>Styleguide</h1>
                <div className="tabs">
                    <div className="tabs__header">
                        <div className={toggleState === 0 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(0)}>Typography</div>
                        <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(1)}>Colors</div>
                        <div className={toggleState === 2 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(2)}>Buttons</div>
                        <div className={toggleState === 3 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(3)}>Images</div>
                    </div>
                    <div className="tabs__body">
                        <div className={toggleState === 0 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Font Family</h2>
                                    <h3 className="styleguide__font-family font-family--abril">Abril Fatface Regular</h3>
                                    <h3 className="styleguide__font-family font-family--lato">Lato</h3>
                                    <h3 className="styleguide__font-family font-family--allura">Allura Regular</h3>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Font Weights</h2>
                                    <ul className="styleguide__font-weights">
                                        <li>
                                            <p className="body-font--black">Black</p>
                                            <p className="body-font--black-italic">Black Italic</p>
                                        </li>
                                        <li>
                                            <p className="body-font--bold">Bold</p>
                                            <p className="body-font--bold-italic">Bold Italic</p>
                                        </li>
                                        <li>
                                            <p>Regular</p>
                                            <p className="body-font--italic">Italic</p>
                                        </li>
                                        <li>
                                            <p className="body-font--light">Light</p>
                                            <p className="body-font--light-italic">Light Italic</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Headings</h2>
                                    <h1>Heading 1</h1>
                                    <h2>Heading 2</h2>
                                    <h3>Heading 3</h3>
                                    <h4>Heading 4</h4>
                                    <h5>Heading 5</h5>
                                    <h6>Heading 6</h6>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Links</h2>
                                    <p><a href="/">This is a regular link</a></p>
                                    <p>Related content <a href="/">links to content</a></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Paragraphs</h2>
                                    <h2 className="styleguide__subtitle">Display</h2>
                                    <p className="paragraph--display">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis unde porro, earum
                                        adipisci assumenda tempore aliquam, hic deserunt perspiciatis maxime sapiente quos numquam,
                                        quibusdam rem. Veniam deleniti beatae harum!</p>
                                    <h2 className="styleguide__subtitle">Regular</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis unde porro, earum
                                        adipisci assumenda tempore aliquam, hic deserunt perspiciatis maxime sapiente quos numquam,
                                        quibusdam rem. Veniam deleniti beatae harum!</p>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <h2 className="styleguide__title">Unordered List</h2>
                                    <ul>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Sit necessitatibus eligendi aliquam!</li>
                                        <li>Sint blanditiis suscipit reprehenderit.</li>
                                        <li>Odio illum nihil harum!</li>
                                        <li>Sequi, pariatur! Facilis, amet.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Typography */}
                        <div className={toggleState === 1 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <h2 className="styleguide__subtitle">Brand</h2>
                            <div className="styleguide__colors">
                                <div className="styleguide__color -oxford-blue">
                                    <span className="styleguide__hex">#374458</span>
                                </div>
                                <div className="styleguide__color -storm-gray">
                                    <span className="styleguide__hex">#717689</span>
                                </div>
                                <div className="styleguide__color -ship-cove">
                                    <span className="styleguide__hex">#7E9BBE</span>
                                </div>
                            </div>
                            <h2 className="styleguide__subtitle">Utility</h2>
                            <div className="styleguide__colors">
                                <div className="styleguide__color -valencia">
                                    <span className="styleguide__hex">#D54430</span>
                                </div>
                            </div>
                        </div>
                        {/* Colors */}
                        <div className={toggleState === 2 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <h2 className="styleguide__title">Buttons</h2>
                            <div className="styleguide__btns">
                                <button className="btn -primary">Button Primary</button>
                                <button className="btn -secondary">Button Secondary</button>
                                <button className="btn -tertiary">Button Tertiary</button>
                            </div>
                        </div>
                        <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            Images
                        </div>
                    </div>
                </div>
            </main>
            <footer>This is the footer</footer>
        </div>
    </div>
  );
}

export default App;
