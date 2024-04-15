import Hero from "./Hero";
import Intro from "./Intro";
import Skills from './Skills';

function HeroIntroSkills() {
    return (
        <div className="container">
            <Hero page="home" />
            <Intro />
            <Skills />
        </div>
    )
}

export default HeroIntroSkills;