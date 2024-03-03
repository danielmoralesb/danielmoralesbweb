import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Websites from './pages/Websites';
import Designs from './pages/Designs';
import Contact from './pages/Contact';
import Styleguide from './pages/Styleguide';
import NoPage from './pages/NoPage';

import './sass/styles.scss';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/websites" element={<Websites />}></Route>
                    <Route path="/designs" element={<Designs/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/styleguide" element={<Styleguide />}></Route>
                    <Route path="*" element={<NoPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;