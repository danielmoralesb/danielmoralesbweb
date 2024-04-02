import heroDaniel from '../src/images/heros/hero-daniel@2x.png';
import heroWebsites from '../src/images/heros/hero-websites@2x.png';
import heroDesigns from '../src/images/heros/hero-designs@2x.png';

import shiDesktop from '../src/images/shi/shi-desktop.svg';
import shiMobile from '../src/images/shi/shi-mobile.svg';

import logoPhotoshop from '../src/images/logos/logo-photoshop.svg';
import logoIllustrator from '../src/images/logos/logo-illustrator.svg';
import logoXd from '../src/images/logos/logo-xd.svg';
import logoFigma from '../src/images/logos/logo-figma.svg';
import logoInvision from '../src/images/logos/logo-invision.svg';
import logoZeplin from '../src/images/logos/logo-zeplin.svg';
import logoHtml5 from '../src/images/logos/logo-html5.svg';
import logoLess from '../src/images/logos/logo-less.svg';
import logoVanillajs from '../src/images/logos/logo-vanillajs.svg';
import logoCss3 from '../src/images/logos/logo-css3.svg';
import logoSass from '../src/images/logos/logo-sass.svg';
import logoLiquid from '../src/images/logos/logo-liquid.svg';
import logoDnn from '../src/images/logos/logo-dnn.svg';
import logoWordpress from '../src/images/logos/logo-wordpress.svg';
import logoGit from '../src/images/logos/logo-git.svg';
import logoSitecore from '../src/images/logos/logo-sitecore.svg';
import logoJquery from '../src/images/logos/logo-jquery.svg';
import logoSourcetree from '../src/images/logos/logo-sourcetree.svg';
import logoAem from '../src/images/logos/logo-aem.svg';
import logoBootstrap from '../src/images/logos/logo-bootstrap.svg';
import logoVisualstudio from '../src/images/logos/logo-visualstudio.svg';
import logoVscode from '../src/images/logos/logo-vscode.svg';
import logoDreamweaver from '../src/images/logos/logo-dreamweaver.svg';
import logoReact from '../src/images/logos/logo-react.svg';
import logoAngular from '../src/images/logos/logo-angular.svg';
import logoAmp from '../src/images/logos/logo-amp.svg';
import logoBem from '../src/images/logos/logo-bem.svg';
import logoJenkins from '../src/images/logos/logo-jenkins.svg';
import logoGulp from '../src/images/logos/logo-gulp.svg';

export const data = {
    hero: [
        {   
            page: "home",
            title1: "Daniel",
            title2: "Morales",
            description: "<strong>Front-End Developer</strong> & <strong>Graphic Designer</strong> with over <strong>10 Years of Experience</strong>",
            image: heroDaniel,
            imageAlt: "Daniel Morales",
            imageTitle: "Daniel Morales"
        },
        {
            page: "websites",
            title1: "Websites",
            title2: "",
            description: "<strong>Collaboration</strong>, <strong>adaptability</strong> and <strong>troubleshooting</strong> have always been part of my web development career. I have <strong>passion for web development</strong> and strive for <strong>finding solutions</strong> for the projects that I am involved with.",
            image: heroWebsites,
            imageAlt: "Laptop with an illustrator design next to monitor displaying css code and an smartphone with and amp page next to it",
            imageTitle: "Latop, Desktop and Smartphone with Web Designs"
        },
        {   page: "designs",
            title1: "Designs",
            title2: "",
            description: "From <strong>websites</strong> to <strong>custom graphics</strong>, icons and <strong>unique lodo desings</strong> I like to be involved on creating and finding graphic solotions in order to complete projects smoothly.",
            image: heroDesigns,
            imageAlt: "Different designs, web, logo and icons",
            imageTitle: "Different designs, web, logo and icons"
        }
        
    ],
    heroNav: [
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/danielmoralesb/",
            style: "hero__link--linkedin"
        },
        {
            name: "codepen",
            url: "https://codepen.io/danielmoralesportfolio",
            style: "hero__link--codepen"
        },
        {
            name: "github",
            url: "https://github.com/danielmoralesb",
            style: "hero__link--github"
        },
        {
            name: "dribbble",
            url: "https://dribbble.com/danielmoralesb",
            style: "hero__link--dribbble"
        },
        {
            name: "Resume",
            url: "/Daniel_Morales_Resume_2024.pdf",
            style: "btn btn--primary btn--icon btn--icon--resume"
        }
    ],
    intro: {
        title: "Designing & Coding",
        description: "Being in Design and Development for more than 10 years has allowed me to participate in multiple projects of different sizes and on a variety of platforms creating digital products for business and consumers. My proactive-approach and communication skills have been the key to cross collaborate and succeed at any challenge in my career.",
        imageDesktop: shiDesktop,
        imageMobile: shiMobile,
        imageDesktopAlt: "Code and designs on multiple screens",
        imageMobileAlt: "Code and designs on multiple screens"
    },
    skills: [
        {
            title: "Design",
            description: "I love creating layouts, icons and any other visual asset that can help a project send the expected message.",
            style: "skills__box--design",
            logos: [
                {
                    src: logoPhotoshop,
                    alt: "Photoshop",
                    style: "logo-photoshop"
                },
                {
                    src: logoFigma,
                    alt: "Figma",
                    style: "logo-figma"
                },
                {
                    src: logoIllustrator,
                    alt: "Illustrator",
                    style: "logo-illustrator"
                },
                {
                    src: logoInvision,
                    alt: "Invision",
                    style: "logo-invision"
                },
                {
                    src: logoXd,
                    alt: "Xd",
                    style: "logo-xd"
                },
                {
                    src: logoZeplin,
                    alt: "Zeplin",
                    style: "logo-zeplin"
                }
            ]
        },
        {
            title: "<span class='block'>Programming</span> <span class='block'>Languages</span>",
            description: "I strive for reusable and concise code that can achieve best results and even faster editing.",
            style: "skills__box--pl",
            logos: [
                {
                    src: logoHtml5,
                    alt: "Html5",
                    style: "logo-html5"
                },
                {
                    src: logoCss3,
                    alt: "Css3",
                    style: "logo-css3"
                },
                {
                    src: logoLess,
                    alt: "Less",
                    style: "logo-less"
                },
                {
                    src: logoSass,
                    alt: "Sass",
                    style: "logo-sass"
                },
                {
                    src: logoVanillajs,
                    alt: "Vanilla Js",
                    style: "logo-vanillajs"
                },
                {
                    src: logoLiquid,
                    alt: "Liquid",
                    style: "logo-liquid"
                }
            ]
        },
        {
            title: "<span class='block'>Content</span> <span class='block'>Management</span>",
            description: "I have being involved on multiple content management systems on various projects on my career.",
            style: "skills__box--cm",
            logos: [
                {
                    src: logoDnn,
                    alt: "Dnn",
                    style: "logo-dnn"
                },
                {
                    src: logoWordpress,
                    alt: "Wordpress",
                    style: "logo-wordpress"
                },
                {
                    src: logoSitecore,
                    alt: "Sitecore",
                    style: "logo-sitecore"
                },
                {
                    src: logoAem,
                    alt: "Aem",
                    style: "logo-aem"
                }
            ]
        },
        {
            title: "Frameworks",
            description: "I have used multiple frameworks thrroughout my career helping projects achieve their goals.",
            style: "skills__box--frameworks",
            logos: [
                {
                    src: logoReact,
                    alt: "React",
                    style: "logo-react"
                },
                {
                    src: logoAngular,
                    alt: "Angular",
                    style: "logo-angular"
                },
                {
                    src: logoJquery,
                    alt: "Jquery",
                    style: "logo-jquery"
                },
                {
                    src: logoAmp,
                    alt: "Amp",
                    style: "logo-amp"
                },
                {
                    src: logoBootstrap,
                    alt: "Bootstrap",
                    style: "logo-bootstrap"
                }
            ]
        },
        {
            title: "Version Control",
            description: "I love creating lyouts, icons and any other visual asset that can help a project send the expected message.",
            style: "skills__box--versioncontrol",
            logos: [
                {
                    src: logoGit,
                    alt: "Git",
                    style: "logo-git"
                },
                {
                    src: logoSourcetree,
                    alt: "Sourcetree",
                    style: "logo-sourcetree"
                }
            ]
        },
        {
            title: "IDE",
            description: "I love creating lyouts, icons and any other visual asset that can help a project send the expected message.",
            style: "skills__box--ide",
            logos: [
                {
                    src: logoVisualstudio,
                    alt: "Visual Studio",
                    style: "logo-visualstudio"
                },
                {
                    src: logoVscode,
                    alt: "Vscode",
                    style: "logo-vscode"
                },
                {
                    src: logoDreamweaver,
                    alt: "Dreamweaver",
                    style: "logo-dreamweaver"
                }
            ]
        },
        {
            title: "Methodologies",
            description: "I love creating lyouts, icons and any other visual asset that can help a project send the expected message.",
            style: "skills__box--methodologies",
            logos: [
                {
                    src: logoBem,
                    alt: "Bem",
                    style: "logo-bem"
                }
            ]
        },
        {
            title: "CI/CD Task Runner",
            description: "I value the use of automation, it has help my team and I save time during development.",
            style: "skills__box--taskrunner",
            logos: [
                {
                    src: logoJenkins,
                    alt: "Jenkins",
                    style: "logo-jenkins"
                },
                {
                    src: logoGulp,
                    alt: "Gulp",
                    style: "logo-gulp"
                }
            ]
        }
    ],
    capabilities : [
        {
            capability1: "Large Capacity",
            capability2: "for Troubleshooting",
            description: "My development experience has taught me how to locate and fix the root causes of HTML, CSS and JavaScript issues on existing or in-development web applications. This debugging skill also helps while trying decipher how file compiling works and styling verification while comparing web renderings to expected designs during the development process.",
            style: "capabilities__box--troubleshooting"
        },
        {
            capability: "Design Skills",
            description1: "My graphic design skills allow me to create and update screens and pages of web applications as well as multiple components, backgrounds,  icons, rasterized images, and vectors. I understand the necessary file types needed in a web application: png, jpg or svgs.",
            description2: "My knowledge allows my to me choose the necessary paths (depening on the project basis) to create and render icons/images with only CSS or an Icon Library such as Font Awesome or Bootstrap.",
            style: "capabilities__box--designskills"
        },
        {
            capability: "Team Work",
            description: "I have collaborated with multiple teams throughout my career: back-end developers, ux/ui designers and project managers. This experience helps me understand, negotiate and succeed on the team effort required to complete any project or task.",
            style: "capabilities__box--teamwork"
        }
    ]
};