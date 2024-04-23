import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tabs from '../components/Tabs';
import MoreProjects from "../components/MoreProjects";

function NoPage() {
    return (
        <div className="casestudies-page">
            <Header />
            <Hero page="casestudies" />
            <Tabs page="websites" />
            <MoreProjects />
            <Footer />
        </div>
    )
}

export default NoPage;