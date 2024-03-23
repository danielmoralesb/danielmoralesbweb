import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import heroWebsites from '../images/heros/hero-websites@2x.png';
import sectionHpp from '../images/sections/section-hpp@2x.png';
import sectionWalpeco from '../images/sections/section-walpeco@2x.png';
import sectionAmp from '../images/sections/section-amp@2x.png';
import sectionFitness from '../images/sections/section-fitness@2x.png';
import sectionApollo from '../images/sections/section-apollo@2x.png';
import sectionCelistics from '../images/sections/section-celistics@2x.png';
import sectionJmm from '../images/sections/section-jmm@2x.png';
import sectionAlp from '../images/sections/section-alp@2x.png';


function NoPage() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return(
        <div className="websites-page">
            <Header />
            <div className="container">
                <section className="hero">
                    <div className="hero__inner">
                        <div className="hero__text">
                            <h1>Websites</h1>
                        </div>
                        <div className="hero__image">
                            <img src={heroWebsites} className="hero-websites" alt="laptop with an illustrator design next to monitor displaying css code and an smartphone with and amp page next to it" />
                        </div>
                    </div>
                    <p><strong>Collaboration</strong>, <strong>adaptability</strong> and <strong>troubleshooting</strong> have always been part of my web development career. I have <strong>passion for web development</strong> and strive for <strong>finding solutions</strong> for the projects that I am involved with.</p>
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
                            <div className={toggleState === 0 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(0)}>School</div>
                            <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(1)}>Testing</div>
                            <div className={toggleState === 2 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(2)}>Freelance</div>
                            <div className={toggleState === 3 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(3)}>Professional</div>
                        </div>
                    </div>
                    <div className="tabs__body">
                        <div className={toggleState === 0 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Hospitality Performance Partners</h3>
                                        <p className="project__date">January 2012</p>
                                        <p className="project__description">I started putting my knowledge and skills to the test as I was advancing on my college career. John Masi, a teacher and entrepreneur at the time needed a website to showcase the story and services of his company. I worked with him from the designing of the company’s logo as well as the future website and eventually developing it bringing the project full circle.</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/hospitality-performance-partners/" title="visit hpp site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionHpp} alt="hpp" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Walpeco</h3>
                                        <p className="project__date">February 2011</p>
                                        <p className="project__description">During my studies I was presented with freelance projects for students, one of these projects was Walpeco. During my participation on this project I brought my graphic design background to project the company’s identity in a elegant and attractive way while hand coding its custom components to give differentiate it from other competitors.</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/walpeco/index.php" title="visit walpeco site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionWalpeco} alt="walpeco" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 1 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">AMP</h3>
                                        <p className="project__date">January 2012</p>
                                        <p className="project__description">More than 5 years ago one of the projects that I was working with on my current company required the use of AMP (Accelerated Mobile Pages). This framework needed to be implemented without breaking the current sitecore site. I designed and developed this AMP test site in order to learn the impletementation of such framework.</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/amp/" title="visit the amp site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionAmp} alt="amp" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Fitness</h3>
                                        <p className="project__date">June 2020</p>
                                        <p className="project__description">Fitness was part of a 3 One Page Sites that my Web Lead assigned to the Front End team at my old company, where we had to develop these sites on a responsive manner while using the latest technologies at the time. One this case I began to explore the potential of Flexbox.</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/fitness/index.html" title="visit the fitness site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionFitness} alt="fitness" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 2 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Apollo Broad Band Corp</h3>
                                        <p className="project__date">July 2015</p>
                                        <p className="project__description">This project was lead by Camilo Sanchez one of founders of Apollo Broad Band Group from Colombia and myself. I got stated with the company's identity and mote as well as its projects. The brainstorming and development resulted in a small but well put website at the time</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/apollo-broadband/index.php" title="visit apollo site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionApollo} alt="hpp" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Celistics</h3>
                                        <p className="project__date">February 2011</p>
                                        <p className="project__description">During my studies I was presented with freelance projects for students, one of these projects was Walpeco. During my participation on this project I brought my graphic design background to project the company’s identity in a elegant and attractive way while hand coding its custom components to give differentiate it from other competitors.</p>
                                        <p className="project__link"><a href="http://danielmoralesb.com/celistics/index.php" title="visit celistics site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionCelistics} alt="celistics" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Joyce Meyer Ministries</h3>
                                        <p className="project__date">January 2017</p>
                                        <p className="project__description">I was part of the team that tackle one of the largest Web Ministries Projects the USA at the time. I was the lead fron-end developer of the project. I worked along with the UX/UI teams to develope the components that were used all along the site. I also make sure that the site was responsive at all times by addressing multiple break points.</p>
                                        <p className="project__link"><a href="https://www.joycemeyer.org/" title="visit jmm site"  target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionJmm} alt="jmm" />
                                    </div>
                                </div>
                            </section>
                            <section className="project">
                                <div className="project__inner container">
                                    <div className="project__text">
                                        <h3 className="project__title">Another Life is Possible</h3>
                                        <p className="project__date">December 2019</p>
                                        <p className="project__description">I worked on this project with the sitecore and design teams for 8 months or so where I had the task of developing the front-end components for mobile and desktop that also addressed multiple functionalities such as dropdown navigation, scrolling loading content with ajax, complex layout with CSS technologies using the calc function among other front-end accomplishments.</p>
                                        <p className="project__link"><a href="anotherlifeispossible.com" title="visit the another life is possible site" target="_blank" rel="noreferrer">View site</a></p>
                                    </div>
                                    <div className="project__image">
                                        <img src={sectionAlp} alt="another life is possible" />
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