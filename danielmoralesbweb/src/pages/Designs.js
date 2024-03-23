import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import heroDesigns from '../images/heros/hero-designs@2x.png';
import sectionNoahsark from '../images/sections/section-noahsark@2x.png';
import sectionNrt from '../images/sections/section-nrt@2x.png';
import sectionIgnium from '../images/sections/section-ignium@2x.png';
import sectionBeachauto from '../images/sections/section-beachauto@2x.png';
import sectionSeeyou from '../images/sections/section-seeyou@2x.png';

function NoPage() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return(
        <div className="designs-page">
            <Header />
            <div className="container">
                <section className="hero">
                    <div className="hero__inner">
                        <div className="hero__text">
                            <h1>Designs</h1>
                        </div>
                        <div className="hero__image">
                            <img src={heroDesigns} className="hero-websites" alt="laptop with an illustrator design next to monitor displaying css code and an smartphone with and amp page next to it" />
                        </div>
                    </div>
                    <p>From <strong>websites</strong> to <strong>custom graphics</strong>, icons and <strong>unique lodo desings</strong> I like to be involved on creating and finding graphic solotions in order to complete projects smoothly. </p>
                    <nav className="hero__nav-wrapper">
                        <ul className="hero__nav">
                            <li className="hero__item"><a href="https://codepen.io/danielmoralesportfolio" className="hero__link hero__link--codepen"><span className="sr-only">Codepen</span></a></li>
                            <li className="hero__item"><a href="https://github.com/danielmoralesb" className="hero__link hero__link--github"><span className="sr-only">Github</span></a></li>
                            <li className="hero__item"><a href="https://dribbble.com/danielmoralesb" className="hero__link hero__link--dribbble"><span className="sr-only">Dribbble</span></a></li>
                            <li className="hero__item"><a href="/" className="btn btn--primary btn--icon btn--icon--resume">Resume</a></li>
                        </ul>
                    </nav>
                </section>
            </div>
            <section>
                <h2>Categories</h2>
                <div className="tabs">
                    <div className="container">
                        <div className="tabs__header">
                            <div className={toggleState === 0 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(0)}>Web</div>
                            <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(1)}>Logos</div>
                            <div className={toggleState === 2 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(2)}>Icons</div>
                            <div className={toggleState === 3 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(3)}>Banners</div>
                        </div>
                    </div>
                    <div className="tabs__body">
                        <div className={toggleState === 0 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Noha's Ark</h3>
                                        <p className="project__date">June 2013</p>
                                        <p className="project__description">Noah’s Ark is an animal sanctuary that was in need of a new website design. I was asked to create a few design variations that were inline with the design trends at the time. I provided 3 separate designs with custom variations in coloring, iconography, imagery and more.</p>
                                        <p className="project__link"><a href="/" title="view noah's ark design">View design</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionNoahsark} alt="noah's ark" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">NRT Expo</h3>
                                        <p className="project__date">February 2018</p>
                                        <p className="project__description">NRT expo was a client that needed a small site that provided information about the upcoming event as well as the tickets sales for it. I kept a technology look with a modern layout using the selected color palette.</p>
                                        <p className="project__link"><a href="/">View design</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionNrt} alt="nrt expo" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 1 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Ignium Digital</h3>
                                        <p className="project__date">December 2019</p>
                                        <p className="project__description">Sitecore Solution COmpany, Ignium DIgital required a logo that showcased mote of the company joined by its literal flam identity. The solution was a geometric digital flame that described the company's identity in a clean way.</p>
                                        <p className="project__link"><a href="/" title="view noah's ark design">View design</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionIgnium} alt="ignium digital" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Beach Auto Service</h3>
                                        <p className="project__date">November 2022</p>
                                        <p className="project__description">The new management of Beach Auto Service wanted to update their old logo to a new logo that focus on vintage muscle vehicles. By keeping the light water turquoise coloring along with new vector construted 1967 Camaro SS imagery.</p>
                                        <p className="project__link"><a href="/">View design</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionBeachauto} alt="beachauto" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 2 ? "tabs__content tabs__content--active" : "tabs__content"}>
                        <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Seeyou</h3>
                                        <p className="project__date">March 2012</p>
                                        <p className="project__description">From 2010 to 2012 I was part of a startup company where we developed a prototype for a merchant and consumer web app where it was possible to track implementation and use of offers from merchants to consumers. I was able to design and build the front icons used all along the app.</p>
                                        <p className="project__link"><a href="/">View design</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionSeeyou} alt="seeyou" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <p>Professional</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default NoPage;