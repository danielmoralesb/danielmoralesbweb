import Header from "../components/Header";
import Footer from "../components/Footer";

import heroDaniel from '../images/heros/hero-daniel@2x.png';
import shiDesktop from '../images/shi/shi-desktop.svg';
import shiMobile from '../images/shi/shi-mobile.svg';
import logoPhotoshop from '../images/logos/logo-photoshop.svg';
import logoIllustrator from '../images/logos/logo-illustrator.svg';
import logoXd from '../images/logos/logo-xd.svg';
import logoFigma from '../images/logos/logo-figma.svg';
import logoInvision from '../images/logos/logo-invision.svg';
import logoZeplin from '../images/logos/logo-zeplin.svg';

function Home() {
    return(
        <div className="home-page">
            <Header />
            <div className="container">
                <section className="hero">
                    <div className="hero__inner">
                        <div className="hero__text">
                            <h1><span className="block--xs">Daniel</span> <span className="block--xs">Morales</span></h1>
                        </div>
                        <div className="hero__image">
                            <img src={heroDaniel} className="hero-daniel" alt="daniel" />
                        </div>
                    </div>
                    <p><strong>Front-End Developer</strong> & <strong>Graphic Designer</strong> with over <strong>10 Years of Experience</strong></p>
                    <nav className="hero__nav-wrapper">
                        <ul className="hero__nav">
                            <li className="hero__item"><a href="https://codepen.io/danielmoralesportfolio" className="hero__link hero__link--codepen"><span className="sr-only">Codepen</span></a></li>
                            <li className="hero__item"><a href="https://github.com/danielmoralesb" className="hero__link hero__link--github"><span className="sr-only">Github</span></a></li>
                            <li className="hero__item"><a href="https://dribbble.com/danielmoralesb" className="hero__link hero__link--dribbble"><span className="sr-only">Dribbble</span></a></li>
                            <li className="hero__item"><a href="/" className="btn btn--primary btn--icon btn--icon--resume">Resume</a></li>
                        </ul>
                    </nav>
                </section>
                <section className="home-intro">
                    <header className="home-intro__header">
                        <img src={shiDesktop} className="shi-desktop" alt="code and designs on multiple screens" />
                        <img src={shiMobile} className="shi-mobile" alt="code and designs on multiple screens" />
                        <h2><span className="block inline--md">Designing &</span> Coding</h2>
                    </header>
                    <p>Being in Design and Development for more than 10 years has allowed me to participate in multiple projects of different sizes and on a variety of platforms creating digital products for business and consumers. My proactive-approach and communication skills have been the key to cross collaborate and succeed at any challenge in my career.</p>
                </section>
                <section>
                    <h2>Skills</h2>
                    <div className="skills">
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                            <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                            <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                            <img src={logoXd} className="logo-xd" alt="xd" />
                            <img src={logoFigma} className="logo-figma" alt="figma" />
                            <img src={logoInvision} className="logo-invision" alt="invision" />
                            <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home;