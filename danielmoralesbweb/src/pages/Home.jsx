import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroIntroSkills from "../components/HeroIntroSkills";
import Capabilities from "../components/Capabilities";
import TextSlider from "../components/TextSlider";

function Home() {
    return(
        <div className="home-page">
            <Header />
            <HeroIntroSkills />
            <Capabilities />
            <TextSlider />
            <Footer />
        </div>
    )
}

export default Home;