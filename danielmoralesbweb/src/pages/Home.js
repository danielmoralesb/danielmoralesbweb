import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Capabilities from "../components/Capabilities";
import TextSlider from "../components/TextSlider";

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
                <Hero page="home" />
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
                    <Capabilities />
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