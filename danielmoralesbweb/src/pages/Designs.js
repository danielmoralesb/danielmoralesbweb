import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

// import heroDesigns from '../images/heros/hero-designs@2x.png';
import sectionNoahsark from '../images/sections/section-noahsark@2x.png';
import sectionNrt from '../images/sections/section-nrt@2x.png';
import sectionIgnium from '../images/sections/section-ignium@2x.png';
import sectionBeachauto from '../images/sections/section-beachauto@2x.png';
import sectionSeeyou from '../images/sections/section-seeyou@2x.png';
import sectionOneway from '../images/sections/section-oneway@2x.png';
import sectionTrekalert from '../images/sections/section-trekalert@2x.jpg';
import sectionInbound from '../images/sections/section-inbound@2x.jpg';

function NoPage() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return(
        <div className="designs-page">
            <Header />
            <div className="container">
                <Hero page="designs" />
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
                                        {/* <p className="project__link"><a href="/" title="view noah's ark design">View design</a></p> */}
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
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
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
                                        {/* <p className="project__link"><a href="/" title="view noah's ark design">View design</a></p> */}
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
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
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
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionSeeyou} alt="seeyou" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Oneway</h3>
                                        <p className="project__date">January 2012</p>
                                        <p className="project__description">As a student I took charge on a series of freelance projects for the Movilway family of companies, the iconography of for the Oneway project came from the design Identity that I developed for Movilway based on one of the biggest communication companies at the time, Skype.</p>
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionOneway} alt="oneway" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Trekalert</h3>
                                        <p className="project__date">May 2012</p>
                                        <p className="project__description">As a freelance student I was able to work on the project for Trekalert, a device before smartphones that allowed you to send your detailed itinerary to your emergency contacts before you go on your hike. I created a registration page that used the elements and colors of its logo and identity.</p>
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionTrekalert} alt="trekalert" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Inbound Boulder</h3>
                                        <p className="project__date">October 2014</p>
                                        <p className="project__description">As a freelance developer/designer I was able to work on the Inbound Boulder design project for a banner that was going to be used on different social media platforms</p>
                                        {/* <p className="project__link"><a href="/">View design</a></p> */}
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionInbound} alt="inbound" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default NoPage;