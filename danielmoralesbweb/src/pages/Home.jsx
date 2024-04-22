import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroIntroSkills from "../components/HeroIntroSkills";
import Capabilities from "../components/Capabilities";
import Slider from "../components/Slider";

function Home() {
    return(
        <div className="home-page">
            <Header />
            <HeroIntroSkills />
            <Capabilities />
            <Slider />
            <Footer />
        </div>
    )
}

export default Home;