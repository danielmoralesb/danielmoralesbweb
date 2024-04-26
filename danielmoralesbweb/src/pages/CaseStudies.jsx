import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionList from "../components/SectionList";

function NoPage() {
    return (
        <div className="casestudies-page">
            <Header />
            <Hero page="casestudies" />
            <SectionList page="casestudies" />
            <Footer />
        </div>
    )
}

export default NoPage;