import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

// import heroWebsites from '../images/heros/hero-websites@2x.png';
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
    return (
        <div className="websites-page">
            <Header />
            <div className="container">
                <Hero page="websites" />
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
                                        <p className="project__link"><a href="/hospitality-performance-partners/" title="visit hpp site" target="_blank" rel="noreferrer">View site</a></p>
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
                                        <p className="project__link"><a href="/walpeco/index.php" title="visit walpeco site" target="_blank" rel="noreferrer">View site</a></p>
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
                                        <p className="project__link"><a href="/amp/" title="visit the amp site" target="_blank" rel="noreferrer">View site</a></p>
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
                                        <p className="project__link"><a href="/fitness/index.html" title="visit the fitness site" target="_blank" rel="noreferrer">View site</a></p>
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
                                        <p className="project__link"><a href="/apollo-broadband/index.php" title="visit apollo site" target="_blank" rel="noreferrer">View site</a></p>
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
                                        <p className="project__link"><a href="/celistics/index.php" title="visit celistics site" target="_blank" rel="noreferrer">View site</a></p>
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
            <section>
                <div className="container">
                    <h2>More Projects</h2>
                    <p className="text-center">This is a list of multiple projects that I have worked on throughout my career.</p>
                    <ul className="project-list">
                        <li><a href="/boogerbooks" target="_blank" title="Boogerbooks" rel="noreferrer">Boogerbooks</a></li>
                        <li><a href="/brandly/index.html" target="_blank" title="Brandly" rel="noreferrer">Brandly</a></li>
                        <li><a href="/diannewagner/index.php" target="_blank" title="Dianner Wagner" rel="noreferrer">Dianne Wagner</a></li>
                        <li><a href="/goodinc/index.html" target="_blank" title="GoodInc" rel="noreferrer">GoodInc</a></li>
                        <li><a href="/hospitality-performance-partners" target="_blank" title="Hospitality Performance Partners" rel="noreferrer">Hospitality Performance Partners</a></li>
                        <li><a href="/jessicaweot/index.html" target="_blank" title="Jessica Weot" rel="noreferrer">Jessica Weot</a></li>
                        <li><a href="/makeupbyyana" target="_blank" title="Makeup By Yana" rel="noreferrer">Makeup By Yana</a></li>
                        <li><a href="/movilway/index.php" target="_blank" title="Movilway" rel="noreferrer">Movilway</a></li>
                        <li><a href="/oneway" target="_blank" title="Oneway" rel="noreferrer">Oneway</a></li>
                        <li><a href="/prohitsports" target="_blank" title="Prohitsports" rel="noreferrer">Prohitsports</a></li>
                        <li><a href="/rolfingwithjorge/index.php" target="_blank" title="Rolfing with Jorge" rel="noreferrer">Rolfing with Jorge</a></li>
                        <li><a href="/softball-tracker" target="_blank" title="Softball Tracker" rel="noreferrer">Softball Tracker</a></li>
                        <li><a href="/tintperfectioncorp/index.html" target="_blank" title="Tint Perfection Corp" rel="noreferrer">Tint Perfection Corp</a></li>
                        <li><a href="/your-website-studio/index.php" target="_blank" title="Your Website Studio" rel="noreferrer">Your Website Studio</a></li>
                        <li><a href="https://mentionmeningitisb.com/" target="_blank" title="Mention Meningitis B" rel="noreferrer">Mention Meningitis B</a></li>
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default NoPage;