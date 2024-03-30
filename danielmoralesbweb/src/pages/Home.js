import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import TextSlider from "../components/TextSlider";

import heroDaniel from '../images/heros/hero-daniel@2x.png';
import shiDesktop from '../images/shi/shi-desktop.svg';
import shiMobile from '../images/shi/shi-mobile.svg';
import logoPhotoshop from '../images/logos/logo-photoshop.svg';
import logoIllustrator from '../images/logos/logo-illustrator.svg';
import logoXd from '../images/logos/logo-xd.svg';
import logoFigma from '../images/logos/logo-figma.svg';
import logoInvision from '../images/logos/logo-invision.svg';
import logoZeplin from '../images/logos/logo-zeplin.svg';
import logoHtml5 from '../images/logos/logo-html5.svg';
import logoLess from '../images/logos/logo-less.svg';
import logoVanillajs from '../images/logos/logo-vanillajs.svg';
import logoCss3 from '../images/logos/logo-css3.svg';
import logoSass from '../images/logos/logo-sass.svg';
import logoLiquid from '../images/logos/logo-liquid.svg';
import logoDnn from '../images/logos/logo-dnn.svg';
import logoWordpress from '../images/logos/logo-wordpress.svg';
import logoGit from '../images/logos/logo-git.svg';
import logoSitecore from '../images/logos/logo-sitecore.svg';
import logoJquery from '../images/logos/logo-jquery.svg';
import logoSourcetree from '../images/logos/logo-sourcetree.svg';
import logoAem from '../images/logos/logo-aem.svg';
import logoBootstrap from '../images/logos/logo-bootstrap.svg';
import logoVisualstudio from '../images/logos/logo-visualstudio.svg';
import logoVscode from '../images/logos/logo-vscode.svg';
import logoDreamweaver from '../images/logos/logo-dreamweaver.svg';
import logoReact from '../images/logos/logo-react.svg';
import logoAngular from '../images/logos/logo-angular.svg';
import logoAmp from '../images/logos/logo-amp.svg';
import logoBem from '../images/logos/logo-bem.svg';
import logoJenkins from '../images/logos/logo-jenkins.svg';
import logoGulp from '../images/logos/logo-gulp.svg';

function Home() {
    const [toggleStateSkills, setToggleStateSkills] = useState(0);

    const toggleSkills = (index) => {
        setToggleStateSkills(index)
    }
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
                            <li className="hero__item"><a href="https://www.linkedin.com/in/danielmoralesb/" className="hero__link hero__link--linkedin" title="linkedin" target="_blank" rel="noreferrer"><span className="sr-only">Linkedin</span></a></li>
                            <li className="hero__item"><a href="https://codepen.io/danielmoralesportfolio" className="hero__link hero__link--codepen" title="codepen" target="_blank" rel="noreferrer"><span className="sr-only">Codepen</span></a></li>
                            <li className="hero__item"><a href="https://github.com/danielmoralesb" className="hero__link hero__link--github" title="github" target="_blank" rel="noreferrer"><span className="sr-only">Github</span></a></li>
                            <li className="hero__item"><a href="https://dribbble.com/danielmoralesb" className="hero__link hero__link--dribbble" title="dribbble" target="_blank" rel="noreferrer"><span className="sr-only">Dribbble</span></a></li>
                            <li className="hero__item"><a href="/Daniel_Morales_Resume_2024.pdf" className="btn btn--primary btn--icon btn--icon--resume" title="Daniel Morales Resume" target="_blank" rel="noreferrer">Resume</a></li>
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
                        <div className="skills__box skills__box--design">
                            <h3>Design</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                                <img src={logoPhotoshop} className="logo-photoshop" alt="photoshop" />
                                <img src={logoFigma} className="logo-figma" alt="figma" />
                                <img src={logoIllustrator} className="logo-illustrator" alt="illustrator" />
                                <img src={logoInvision} className="logo-invision" alt="invision" />
                                <img src={logoXd} className="logo-xd" alt="xd" />
                                <img src={logoZeplin} className="logo-zeplin" alt="zeplin" />
                            </div>
                        </div>
                        <div className="skills__box skills__box--pl">
                            <h3><span className="block">Programming</span> <span className="block">Languages</span></h3>
                            <p>I strive for reusable and concise code that can achieve best results and even faster editing.</p>
                            <div className="skills__logos">
                                <img src={logoHtml5} className="logo-html5" alt="html5" />
                                <img src={logoCss3} className="logo-css3" alt="css3" />
                                <img src={logoLess} className="logo-less" alt="less" />
                                <img src={logoSass} className="logo-sass" alt="sass" />
                                <img src={logoVanillajs} className="logo-vanillajs" alt="vanilla js" />
                                <img src={logoLiquid} className="logo-liquid" alt="liquid" />
                            </div>
                        </div>
                        <div className="skills__box skills__box--cm">
                            <h3><span className="block">Content</span> <span className="block">Management</span></h3>
                            <p>I have being involved on multiple content management systems on various projects on my career.</p>
                            <div className="skills__logos">
                                <img src={logoDnn} className="logo-dnn" alt="dnn" />
                                <img src={logoWordpress} className="logo-wordpress" alt="wordpress" />
                                <img src={logoSitecore} className="logo-sitecore" alt="sitecore" />
                                <img src={logoAem} className="logo-aem" alt="aem" />
                            </div>
                        </div>
                        <div className="skills__box skills__box--frameworks">
                            <h3>Frameworks</h3>
                            <p>I have used multiple frameworks thrroughout my career helping projects achieve their goals.</p>
                            <div className="skills__logos">
                                <img src={logoReact} className="logo-react" alt="react" />
                                <img src={logoAngular} className="logo-angular" alt="angular" />
                                <img src={logoJquery} className="logo-jquery" alt="jquery" />
                                <img src={logoAmp} className="logo-amp" alt="amp" />
                                <img src={logoBootstrap} className="logo-bootstrap" alt="bootstrap" />
                            </div>
                        </div>
                        <button className={toggleStateSkills === 1 ? "btn btn--primary btn--icon btn--icon--plus  hidden" : "btn btn--primary btn--icon btn--icon--plus"} onClick={() => toggleSkills(1)}>More Skills</button>
                        <div className={toggleStateSkills === 1 ? "skills__box skills__box--versioncontrol" : "skills__box skills__box--versioncontrol hidden"}>
                            <h3>Version Control</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                                <img src={logoGit} className="logo-git" alt="git" />
                                <img src={logoSourcetree} className="logo-sourcetree" alt="sourcetree" />
                            </div>
                        </div>
                        <div className={toggleStateSkills === 1 ? "skills__box skills__box--ide" : "skills__box skills__box--ide hidden"}>
                            <h3>IDE</h3>
                            <p>I love creating lyouts, icons and any other visual asset that can help a project send the expected message.</p>
                            <div className="skills__logos">
                                <img src={logoVisualstudio} className="logo-visualstudio" alt="visualstudio" />
                                <img src={logoVscode} className="logo-vscode" alt="vscode" />
                                <img src={logoDreamweaver} className="logo-dreamweaver" alt="dreamweaver" />
                            </div>
                        </div>
                        <div className={toggleStateSkills === 1 ? "skills__box skills__box--methodologies" : "skills__box skills__box--methodologies hidden"}>
                            <h3>Methodologies</h3>
                            <p>The use of mthodologies such as BEM have help my teams keep a cohesive syntax during project development.</p>
                            <div className="skills__logos">
                                <img src={logoBem} className="logo-bem" alt="bem" />
                            </div>
                        </div>
                        <div className={toggleStateSkills === 1 ? "skills__box skills__box--taskrunner" : "skills__box skills__box--taskrunner hidden"}>
                            <h3>CI/CD Task Runner</h3>
                            <p>I value the use of automation, it has help my team and I save time during development.</p>
                            <div className="skills__logos">
                                <img src={logoJenkins} className="logo-jenkins" alt="jenkins" />
                                <img src={logoGulp} className="logo-gulp" alt="gulp" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                <section>
                    <h2>Capabilities</h2>
                    <div className="capabilities">
                        <div className="capabilities__box capabilities__box--troubleshooting">
                            <div className="container">
                                <h4><span className="block">Large Capacity</span> <span className="block">for Troubleshooting</span></h4>
                                <p>My development experience has taught me how to locate and fix the root causes of HTML, CSS and JavaScript issues on existing or in-development web applications. This debugging skill also helps while trying decipher how file compiling works and styling verification while comparing web renderings to expected designs during the development process.</p>
                            </div>
                        </div>
                        <div className="capabilities__box capabilities__box--designskills">
                            <div className="container">
                                <h4>Design Skills</h4>
                                <p>My graphic design skills allow me to create and update screens and pages of web applications as well as multiple components, backgrounds,  icons, rasterized images, and vectors. I understand the necessary file types needed in a web application: png, jpg or svgs.</p>
                                <p>My knowledge allows my to me choose the necessary paths (depening on the project basis) to create and render icons/images with only CSS or an Icon Library such as Font Awesome or Bootstrap.</p>
                            </div>
                        </div>
                        <div className="capabilities__box capabilities__box--teamwork">
                            <div className="container">
                                <h4>Team Work</h4>
                                <p>I have collaborated with multiple teams throughout my career: back-end developers, ux/ui designers and project managers. This experience helps me understand, negotiate and succeed on the team effort required to complete any project or task.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="testimonials">
                        <h2>Testimonials</h2>
                        <TextSlider />
                    </section>
                </div>
            <Footer />
        </div>
    )
}

export default Home;