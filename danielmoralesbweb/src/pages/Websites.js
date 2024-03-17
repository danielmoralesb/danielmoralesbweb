import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import heroWebsites from '../images/heros/hero-websites@2x.png';

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
                <section>
                    <h2>Categories</h2>
                    <div className="tabs">
                        <div className="tabs__header">
                            <div className={toggleState === 0 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(0)}>School</div>
                            <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(1)}>Testing</div>
                            <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(2)}>Freelance</div>
                            <div className={toggleState === 1 ? "tabs__control tabs__control--active" : "tabs__control"} onClick={() => toggleTab(3)}>Professional</div>
                        </div>
                        <div className="tabs__body">
                            <div className={toggleState === 0 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <p>School</p>
                            </div>
                            <div className={toggleState === 1 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <p>Testing</p>
                            </div>
                            <div className={toggleState === 2 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <p>Freelance</p>
                            </div>
                            <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <p>Professional</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default NoPage;