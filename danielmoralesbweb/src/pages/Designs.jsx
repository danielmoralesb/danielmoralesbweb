import { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tabs from '../components/Tabs';

function NoPage() {
    return(
        <div className="designs-page">
            <Header />
            <Hero page="designs" />
            <Tabs page="designs" />
            <Footer />
        </div>
    )
}

export default NoPage;