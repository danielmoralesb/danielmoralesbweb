import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";

import iconBars from '../images/icons/icon-bars.svg';
import iconCross from '../images/icons/icon-cross.svg';
import iconPlus from '../images/icons/icon-plus.svg';
import iconResume from '../images/icons/icon-resume.svg';
import iconResumeGold from '../images/icons/icon-resume-gold.svg';
import logoCodepen from '../images/logos/logo-codepen.svg';
import logoGithub from '../images/logos/logo-github.svg';
import logoDribbble from '../images/logos/logo-dribbble.svg';
import logoCodepenBlue from '../images/logos/logo-codepen-blue.svg';
import logoGithubBlue from '../images/logos/logo-github-blue.svg';
import logoDribbbleBlue from '../images/logos/logo-dribbble-blue.svg';
import logoPhotoshop from '../images/logos/logo-photoshop.svg';
import logoIllustrator from '../images/logos/logo-illustrator.svg';
import logoXd from '../images/logos/logo-xd.svg';
import logoDreamweaver from '../images/logos/logo-dreamweaver.svg';
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
import logoVisualstudio from '../images/logos/logo-visualstudio.svg';
import logoVscode from '../images/logos/logo-vscode.svg';
import logoBootstrap from '../images/logos/logo-bootstrap.svg';
import logoReact from '../images/logos/logo-react.svg';
import logoAmp from '../images/logos/logo-amp.svg';
import logoBem from '../images/logos/logo-bem.svg';
import logoJenkins from '../images/logos/logo-jenkins.svg';
import logoGulp from '../images/logos/logo-gulp.svg';
import heroDaniel from '../images/heros/hero-daniel@2x.png';
import heroWebsites from '../images/heros/hero-websites@2x.png';
import heroDesigns from '../images/heros/hero-designs@2x.png';
import bgClosetag from '../images/backgrounds/bg-closetag.svg';
import bgSlash from '../images/backgrounds/bg-slash.svg';
import bgCode from '../images/backgrounds/bg-code@2x.png';
import bgDesigns from '../images/backgrounds/bg-designs@2x.png';
import bgTeam from '../images/backgrounds/bg-team@2x.png';
import sectionHpp from '../images/sections/section-hpp@2x.png';
import sectionWalpeco from '../images/sections/section-walpeco@2x.png';
import sectionNoahsark from '../images/sections/section-noahsark@2x.png';
import sectionNrt from '../images/sections/section-nrt@2x.png';

function Styleguide() {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <div>
            <div className="container">
                <Header />
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
                                        <h3 className="styleguide__subtitle">Display</h3>
                                        <p className="paragraph--display">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis unde porro, earum
                                            adipisci assumenda tempore aliquam, hic deserunt perspiciatis maxime sapiente quos numquam,
                                            quibusdam rem. Veniam deleniti beatae harum!</p>
                                        <h3 className="styleguide__subtitle">Regular</h3>
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
                                <h2 className="styleguide__title">Brand</h2>
                                <div className="styleguide__colors">
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-primary">
                                            <span className="styleguide__color__hex">#323550</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">primary</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-secondary">
                                            <span className="styleguide__color__hex">#191B28</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">secondary</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-secondary">
                                            <span className="styleguide__color__hex">#191B28</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">secondary</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-tertiary">
                                            <span className="styleguide__color__hex">#DAB279</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">tertiary</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-primary-alt">
                                            <span className="styleguide__color__hex">#22253A</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">primary alt</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--brand-tertiary-alt">
                                            <span className="styleguide__color__hex">#967751</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">tertiary alt</p>
                                    </div>
                                </div>
                                <h2 className="styleguide__title">Utility</h2>
                                <div className="styleguide__colors">
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--black-pearl">
                                            <span className="styleguide__color__hex">#02040C</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">black pearl</p>
                                    </div>
                                    <div className="styleguide__color">
                                        <div className="styleguide__color__box bg-color--white">
                                            <span className="styleguide__color__hex">#FFFFFF</span>
                                        </div>
                                        <p className="styleguide__color__variable-name">white</p>
                                    </div>
                                </div>
                            </div>
                            {/* Colors */}
                            <div className={toggleState === 2 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Primary</h2>
                                            <button className="btn btn--primary">Button Primary</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Primary with icon</h2>
                                            <button className="btn btn--primary btn--icon btn--icon--plus">Button Primary</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Primary with icon</h2>
                                            <button className="btn btn--primary btn--icon btn--icon--resume">Button Primary</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Secondary</h2>
                                            <button className="btn btn--secondary">Button Secondary</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Secondary with icon</h2>
                                            <button className="btn btn--secondary btn--icon btn--icon--resume-gold">Button Secondary</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Links as buttons</h2>
                                            <h3 className="styleguide__subtitle">Primary</h3>
                                            <a href="/" className="btn btn--primary">Button Primary</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Links as buttons</h2>
                                            <h3 className="styleguide__subtitle">Primary with icon</h3>
                                            <a href="/" className="btn btn--primary btn--icon btn--icon--plus">Button Primary</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Links as buttons</h2>
                                            <h3 className="styleguide__subtitle">Primary with icon</h3>
                                            <a href="/" className="btn btn--primary btn--icon btn--icon--resume">Button Primary</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Links as buttons</h2>
                                            <h3 className="styleguide__subtitle">Secondary</h3>
                                            <a href="/" className="btn btn--secondary">Button Secondary</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Links as buttons</h2>
                                            <h3 className="styleguide__subtitle">Secondary with icon</h3>
                                            <a href="/" className="btn btn--secondary btn--icon btn--icon--resume-gold">Button Secondary</a>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="styleguide__title">Tabs</h2>
                                <div className="tabs">
                                    <div className="tabs__header">
                                        <div className="tabs__control tabs__control--active">Typography</div>
                                        <div className="tabs__control">Colors</div>
                                        <div className="tabs__control">Buttons</div>
                                        <div className="tabs__control">Images</div>
                                    </div>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className={toggleState === 3 ? "tabs__content tabs__content--active" : "tabs__content"}>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Icons</h2>
                                            <img src={iconBars} className="styleguide__icon" alt="bars" />
                                            <img src={iconCross} className="styleguide__icon" alt="cross" />
                                            <img src={iconPlus} className="styleguide__icon" alt="plus" />
                                            <img src={iconResume} className="styleguide__icon" alt="resume" />
                                            <img src={iconResumeGold} className="styleguide__icon" alt="resume gold" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-8">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Logos platforms</h2>
                                            <img src={logoCodepen} className="styleguide__logo logo-codepen" alt="codepen" />
                                            <img src={logoGithub} className="styleguide__logo logo-github" alt="github" />
                                            <img src={logoDribbble} className="styleguide__logo logo-dribbble" alt="dribbble" />
                                            <img src={logoCodepenBlue} className="styleguide__logo logo-codepen" alt="codepen" />
                                            <img src={logoGithubBlue} className="styleguide__logo logo-github" alt="github" />
                                            <img src={logoDribbbleBlue} className="styleguide__logo logo-dribbble" alt="dribbble" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Logos technology</h2>
                                            <div className="styleguide__btn-wrapper styleguide__logos-tech">
                                                <img src={logoPhotoshop} className="styleguide__logo-tech logo-photoshop" alt="photoshop" />
                                                <img src={logoIllustrator} className="styleguide__logo-tech logo-illustrator" alt="illustrator" />
                                                <img src={logoXd} className="styleguide__logo-tech logo-xd" alt="xd" />
                                                <img src={logoDreamweaver} className="styleguide__logo-tech logo-dreamweaver" alt="dreamweaver" />
                                                <img src={logoFigma} className="styleguide__logo-tech logo-figma" alt="figma" />
                                                <img src={logoInvision} className="styleguide__logo-tech logo-invision" alt="invision" />
                                                <img src={logoZeplin} className="styleguide__logo-tech logo-zeplin" alt="zeplin" />
                                                <img src={logoHtml5} className="styleguide__logo-tech logo-html5" alt="html5" />
                                                <img src={logoLess} className="styleguide__logo-tech logo-less" alt="less" />
                                                <img src={logoVanillajs} className="styleguide__logo-tech logo-vanillajs" alt="vanilla js" />
                                                <img src={logoCss3} className="styleguide__logo-tech logo-css3" alt="css3" />
                                                <img src={logoSass} className="styleguide__logo-tech logo-sass" alt="sass" />
                                                <img src={logoLiquid} className="styleguide__logo-tech logo-liquid" alt="liquid" />
                                                <img src={logoDnn} className="styleguide__logo-tech logo-dnn" alt="dnn" />
                                                <img src={logoWordpress} className="styleguide__logo-tech logo-wordpress" alt="wordpress" />
                                                <img src={logoGit} className="styleguide__logo-tech logo-git" alt="git" />
                                                <img src={logoSitecore} className="styleguide__logo-tech logo-sitecore" alt="sitecore" />
                                                <img src={logoJquery} className="styleguide__logo-tech logo-jquery" alt="jquery" />
                                                <img src={logoSourcetree} className="styleguide__logo-tech logo-sourcetree" alt="sourcetree" />
                                                <img src={logoAem} className="styleguide__logo-tech logo-aem" alt="aem" />
                                                <img src={logoVisualstudio} className="styleguide__logo-tech logo-visualstudio" alt="visualstudio" />
                                                <img src={logoVscode} className="styleguide__logo-tech logo-vscode" alt="vscode" />
                                                <img src={logoBootstrap} className="styleguide__logo-tech logo-bootstrap" alt="bootstrap" />
                                                <img src={logoReact} className="styleguide__logo-tech logo-react" alt="react" />
                                                <img src={logoAmp} className="styleguide__logo-tech logo-amp" alt="amp" />
                                                <img src={logoBem} className="styleguide__logo-tech logo-bem" alt="bem" />
                                                <img src={logoJenkins} className="styleguide__logo-tech logo-jenkins" alt="jenkins" />
                                                <img src={logoGulp} className="styleguide__logo-tech logo-gulp" alt="gulp" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Hero images</h2>
                                            <div className="styleguide__heros">
                                                <img src={heroDaniel} className="styleguide__hero hero-daniel" alt="daniel" />
                                                <img src={heroWebsites} className="styleguide__hero hero-websites" alt="websites" />
                                                <img src={heroDesigns} className="styleguide__hero hero-designs" alt="designs" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Backgrounds vectors</h2>
                                            <img src={bgClosetag} className="styleguide__bg" alt="closetag" />
                                            <img src={bgSlash} className="styleguide__bg" alt="slash" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Backgrounds images</h2>
                                            <img src={bgCode} className="styleguide__bg-img" alt="code" />
                                            <img src={bgDesigns} className="styleguide__bg-img" alt="designs" />
                                            <img src={bgTeam} className="styleguide__bg-img" alt="team" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="styleguide__btn-wrapper">
                                            <h2 className="styleguide__title">Section images</h2>
                                            <img src={sectionHpp} className="styleguide__section section-hpp" alt="hpp" />
                                            <img src={sectionWalpeco} className="styleguide__section section-walpeco" alt="walpeco" />
                                            <img src={sectionNoahsark} className="styleguide__section section-noahsark" alt="noahsark" />
                                            <img src={sectionNrt} className="styleguide__section section-nrt" alt="nrt" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Images */}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Styleguide;