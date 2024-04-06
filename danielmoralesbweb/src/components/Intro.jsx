import { data } from '../data';

function Intro() {
    const intro = data.intro;

    return (
        <>
            <section className="home-intro">
                <header className="home-intro__header">
                    <img src={intro.imageDesktop} className="shi-desktop" alt={intro.imageDesktopAlt} />
                    <img src={intro.imageMobile} className="shi-mobile" alt={intro.imageMobileAlt} />
                    <h2>{intro.title}</h2>
                </header>
                <p>{intro.description}</p>
            </section>
        </>
    );
}

export default Intro;