import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Skills from '../components/Skills';
import Capabilities from "../components/Capabilities";
import TextSlider from "../components/TextSlider";

function Home() {
    return(
        <div className="home-page">
            <Header />
            <div className="container">
                <Hero page="home" />
                <Intro />
                <Skills />
            </div>
            <Capabilities />
            <TextSlider />
            <Footer />
        </div>
    )
}

export default Home;