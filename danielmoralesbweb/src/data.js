import heroDaniel from '../src/images/heros/hero-daniel@2x.png';
import heroWebsites from '../src/images/heros/hero-websites@2x.png';
import heroDesigns from '../src/images/heros/hero-designs@2x.png';

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