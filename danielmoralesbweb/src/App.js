import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Designs from './pages/Designs';
import Contact from './pages/Contact';
import Styleguide from './pages/Styleguide';
import CaseStudies from './pages/CaseStudies';
import NoPage from './pages/NoPage';

import './sass/styles.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/websites" element={<Websites />}></Route>
                <Route path="/designs" element={<Designs/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/styleguide" element={<Styleguide />}></Route>
                <Route path="/casestudies" element={<CaseStudies />}></Route>
                <Route path="*" element={<NoPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;